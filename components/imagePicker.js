import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerComponent({ onImagePick, setFormState }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(`result ${result}`);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setFormState((prevState) => ({ ...prevState, image: result.assets[0].uri.toString() }));
        }
    };

    return (
        <View style={{}}>
            {!image && (
                <Button
                    title="Pick an image from the Galery"
                    onPress={pickImage}
                />
            )}
            {image && (
                <View>
                    <Button title="Change image" onPress={pickImage} />
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            )}
        </View>
    );
}
