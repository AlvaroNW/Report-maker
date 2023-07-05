import { Camera } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { Button, StyleSheet, View, Image, Text } from "react-native";
import * as MediaLibrary from "expo-media-library";

export default function CameraComponent() {
    const cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === "granted");
        })();
    }, []);

    if (hasCameraPermission === null) {
        return <View />;
    }

    if (hasCameraPermission === false) {
        return <Text>No access to camera. Please grant permission.</Text>;
    }

    const takePic = async () => {
        if (cameraRef.current) {
            const options = {
                quality: 0.8,
                base64: true,
                skipProcessing: true,
            };
            const newPhoto = await cameraRef.current.takePictureAsync(options);
            setPhoto(newPhoto);
        }
    };

    const savePhoto = async () => {
        if (photo) {
            await MediaLibrary.saveToLibraryAsync(photo.uri);
            setPhoto(null);
        }
    };

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={Camera.Constants.Type.back}
            />
            <View style={styles.buttonContainer}>
                {!photo && <Button title="Take Picture" onPress={takePic} />}
                {photo && (
                    <>
                        <Image
                            source={{ uri: photo.uri }}
                            style={styles.preview}
                        />
                        <Button title="Save Picture" onPress={savePhoto} />
                        <Button title="Cancel" onPress={() => setPhoto(null)} />
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "transparent",
    },
    preview: {
        flex: 1,
        width: "100%",
        height: 200,
        marginTop: 20,
        marginBottom: 10,
    },
});
