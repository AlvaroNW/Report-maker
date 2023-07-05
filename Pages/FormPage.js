import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text,
    Image,
    ScrollView,
} from "react-native";
import CameraComponent from "../components/Camera";
import PDFGenerator from "../components/PDFGenerator";
import ImagePickerComponent from "../components/imagePicker";
import { YearPicker } from "../components/YearPicker";



const FormPage = () => {
    const [formState, setFormState] = useState({
        IMO: "",
        flag: "",
        image: "",
        owner: "",
        vesselName: "",
        year: "",
    });
    
    const [startCamera, setStartCamera] = useState(false);

    console.log(formState);

    const startCameraHandler = () => {
        setStartCamera(true);
    };

    const handleChangeText = (inputName, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [inputName]: value,
        }));
    };

    const handleImagePick = (imageUri) => {
        console.log(`URI ${imageUri}`);
        setFormState((prevState) => ({
            ...prevState,
            image: imageUri,
        }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {!startCamera && (
                <View style={styles.formContainer}>
                    <Text style={styles.sectionLabel}>Vessel</Text>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        value={formState.vesselName}
                        onChangeText={(value) =>
                            handleChangeText("vesselName", value)
                        }
                        style={styles.textInput}
                    />
                    <Text style={styles.label}>Owner:</Text>
                    <TextInput
                        value={formState.owner}
                        onChangeText={(value) =>
                            handleChangeText("owner", value)
                        }
                        style={styles.textInput}
                    />
                    <Text style={styles.label}>Flag:</Text>
                    <TextInput
                        value={formState.flag}
                        onChangeText={(value) =>
                            handleChangeText("flag", value)
                        }
                        style={styles.textInput}
                    />
                    <Text style={styles.label}>IMO:</Text>
                    <TextInput
                        value={formState.IMO}
                        onChangeText={(value) => handleChangeText("IMO", value)}
                        style={styles.textInput}
                    />
                    <Text style={styles.label}>Year:</Text>
                    <YearPicker setFormState={setFormState} />

                    <Text style={styles.label}>Photo:</Text>
                    <ImagePickerComponent onImagePick={handleImagePick} setFormState={setFormState}/>

                    
                </View>
            )}
            {!startCamera && (
                <Button title="Start Camera" onPress={startCameraHandler} />
            )}
            {startCamera && <CameraComponent />}
            <PDFGenerator formState={formState} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    formContainer: {
        marginBottom: 20,
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    sectionLabel: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        marginBottom: 10,
    },
});

export default FormPage;
