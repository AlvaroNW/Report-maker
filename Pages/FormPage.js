import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import CameraComponent from "../components/Camera";
import PDFGenerator from "../components/PDFGenerator";
import ImagePickerComponent from "../components/imagePicker";
import { YearPicker } from "../components/YearPicker";
import { DatePicker } from "../components/DatePicker";
import NationalityInput from "../components/NationalityInput";
import Likert from "../components/Likert";

const FormPage = () => {
    const [formState, setFormState] = useState({
        //Vessel
        vesselName: "",
        owner: "",
        type: "",
        flag: "",
        IMO: "",
        year: "",
        image: "",
        //Visit
        date: "",
        port: "",
        HMSRep: "",
        //Crew
        captainName: "",
        firstChiefCookName: "",
        firstChiefCookEmbarcation: "",
        secondChiefCookName: "",
        secondChiefCookEmbarcation: "",
        nationalityCrew: {
            nationalities: [],
        },
        total: "",
        nationalityGalleyCrew: {
            nationalities: [],
        },
        totalGalleyCrew: "",
        //Responsibilities
        orderResponsibility: "",
        rationReportResponsibility: "",
        inventoryResponsibility: "",
        //Provision Areas
        galley: "",
        officerPantry: "",
        officerMessroom: "",
        crewPantry: "",
        chillerFruitsAndVegetables: "",
        chillerDairy: "",
        freezerMeat: "",
        freezerFish: "",
        dryStore: "",
        dutyMeshroom: "",
        overall: "",
        //images
        reportImages: [],

        //interview with Chief Cook
        chiefCook1: "",
        chiefCook2: "",
        chiefCook3: "",
        chiefCook4: "",
        chiefCook5: "",
        chiefCook6: {
            answer: null,
            comments: "",
        },
        chiefCook6a: "",
        chiefCook6b: "",
        chiefCook7: {
            answer: null,
            comments: "",
        },
        chiefCook8: {
            answer: null,
            comments: "",
        },
        chiefCook9: {
            answer: null,
            comments: "",
        },
        chiefCook10: {
            answer: null,
            comments: "",
        },
        chiefCook11: {
            answer: null,
            comments: "",
        },
        chiefCook12: {
            answer: null,
            comments: "",
        },
        chiefCook13: {
            answer: null,
            comments: "",
        },
        chiefCook14: {
            answer: null,
            comments: "",
        },
        chiefCook15: {
            answer: null,
            comments: "",
        },
        chiefCook16: {
            answer: null,
            comments: "",
        },
        chiefCook17: {
            answer: null,
            comments: "",
        },
        chiefCook18: {
            answer: null,
            comments: "",
        },
        chiefCook19: {
            answer: null,
            comments: "",
        },
        chiefCook20: {
            answer: null,
            comments: "",
        },
        chiefCook21: {
            answer: null,
            comments: "",
        },

        //interview with Captain
        captain1: {
            answer: null,
            comments: "",
        },
        captain2: { answer: null, comments: "" },
        captain3: { answer: null, comments: "" },
        captain4: { answer: null, comments: "" },
        captain5: { answer: null, comments: "" },
        captain6: { answer: null, comments: "" },
        captain7: { answer: null, comments: "" },
        captain8: { answer: null, comments: "" },
        //LikertScales
        captain9a: { answer: 0, comments: "" },
        captain9b: { answer: 0, comments: "" },
        captain9c: { answer: 0, comments: "" },
        captain9d: { answer: 0, comments: "" },
        captain9e: { answer: 0, comments: "" },

        captain10a: { answer: 0, comments: "" },
        captain10b: { answer: 0, comments: "" },
        captain10c: { answer: 0, comments: "" },
        captain10d: { answer: 0, comments: "" },
        captain10e: { answer: 0, comments: "" },
        captain10f: { answer: 0, comments: "" },
        captain10g: { answer: 0, comments: "" },

        captain11: { answer: null, comments: "" },
        captain12: { answer: null, comments: "" },
        captain13: { answer: null, comments: "" },

        commentsAndConclusion: "",
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
    const handleNationalityChange = (text, index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityCrew.nationalities,
            ];
            updatedNationalities[index].nationality = text;
            return {
                ...prevState,
                nationalityCrew: {
                    ...prevState.nationalityCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleNumberOfPeopleChange = (text, index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityCrew.nationalities,
            ];
            updatedNationalities[index].numberOfPeople = text;
            return {
                ...prevState,
                nationalityCrew: {
                    ...prevState.nationalityCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleDecreaseNumberOfPeople = (index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityCrew.nationalities,
            ];
            if (updatedNationalities[index].numberOfPeople > 0) {
                updatedNationalities[index].numberOfPeople--;
            }
            return {
                ...prevState,
                nationalityCrew: {
                    ...prevState.nationalityCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleIncreaseNumberOfPeople = (index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityCrew.nationalities,
            ];
            updatedNationalities[index].numberOfPeople++;
            return {
                ...prevState,
                nationalityCrew: {
                    ...prevState.nationalityCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleAddNationality = () => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityCrew.nationalities,
                { nationality: "", numberOfPeople: "" },
            ];
            return {
                ...prevState,
                nationalityCrew: {
                    ...prevState.nationalityCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleRemoveNationality = (index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityCrew.nationalities,
            ];
            updatedNationalities.splice(index, 1);
            return {
                ...prevState,
                nationalityCrew: {
                    ...prevState.nationalityCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };
    const handleNationalityGalleyCrewChange = (text, index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityGalleyCrew.nationalities,
            ];
            updatedNationalities[index].nationality = text;
            return {
                ...prevState,
                nationalityGalleyCrew: {
                    ...prevState.nationalityGalleyCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleNumberOfPeopleGalleyCrewChange = (text, index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityGalleyCrew.nationalities,
            ];
            updatedNationalities[index].numberOfPeople = text;
            return {
                ...prevState,
                nationalityGalleyCrew: {
                    ...prevState.nationalityGalleyCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleDecreaseNumberOfPeopleGalleyCrew = (index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityGalleyCrew.nationalities,
            ];
            if (updatedNationalities[index].numberOfPeople > 0) {
                updatedNationalities[index].numberOfPeople--;
            }
            return {
                ...prevState,
                nationalityGalleyCrew: {
                    ...prevState.nationalityGalleyCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleIncreaseNumberOfPeopleGalleyCrew = (index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityGalleyCrew.nationalities,
            ];
            updatedNationalities[index].numberOfPeople++;
            return {
                ...prevState,
                nationalityGalleyCrew: {
                    ...prevState.nationalityGalleyCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleAddNationalityGalleyCrew = () => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityGalleyCrew.nationalities,
                { nationality: "", numberOfPeople: "" },
            ];
            return {
                ...prevState,
                nationalityGalleyCrew: {
                    ...prevState.nationalityGalleyCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    const handleRemoveNationalityGalleyCrew = (index) => {
        setFormState((prevState) => {
            const updatedNationalities = [
                ...prevState.nationalityGalleyCrew.nationalities,
            ];
            updatedNationalities.splice(index, 1);
            return {
                ...prevState,
                nationalityGalleyCrew: {
                    ...prevState.nationalityGalleyCrew,
                    nationalities: updatedNationalities,
                },
            };
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {!startCamera && (
                <React.Fragment>
                    {/* Vessel*/}
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
                        <Text style={styles.label}>Type:</Text>
                        <TextInput
                            value={formState.vesselName}
                            onChangeText={(value) =>
                                handleChangeText("type", value)
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
                            onChangeText={(value) =>
                                handleChangeText("IMO", value)
                            }
                            style={styles.textInput}
                        />
                        <Text style={styles.label}>Year:</Text>
                        <YearPicker setFormState={setFormState} />

                        <Text style={styles.label}>Photo:</Text>
                        <ImagePickerComponent
                            onImagePick={handleImagePick}
                            setFormState={setFormState}
                        />
                    </View>

                    {/* Visit */}
                    <View style={styles.formContainer}>
                        <Text style={styles.sectionLabel}>Visit</Text>
                        <Text style={styles.label}>Date:</Text>
                        <DatePicker setFormState={setFormState} />
                        <Text style={styles.label}>Port:</Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>HMS Representative:</Text>
                    </View>
                    {/* Crew */}
                    <View style={styles.formContainer}>
                        <Text style={styles.sectionLabel}>Crew</Text>
                        <Text style={styles.label}>Captain Name:</Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>First Chief Cook Name:</Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            {" "}
                            First Chief Cook Embarcation:
                        </Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            Second Chief Cook Name:
                        </Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            Second Chief Cook Embarcation:
                        </Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            Nationality (Full Crew) Number
                        </Text>
                        {formState.nationalityCrew.nationalities.map(
                            (nationality, index) => (
                                <NationalityInput
                                    key={index}
                                    nationality={nationality.nationality}
                                    numberOfPeople={nationality.numberOfPeople}
                                    onNationalityChange={(text) =>
                                        handleNationalityChange(text, index)
                                    }
                                    onNumberOfPeopleChange={(text) =>
                                        handleNumberOfPeopleChange(text, index)
                                    }
                                    onDecreaseNumberOfPeople={() =>
                                        handleDecreaseNumberOfPeople(index)
                                    }
                                    onIncreaseNumberOfPeople={() =>
                                        handleIncreaseNumberOfPeople(index)
                                    }
                                    onRemoveNationality={() =>
                                        handleRemoveNationality(index)
                                    }
                                />
                            )
                        )}

                        <Button
                            title="Add Nationality"
                            onPress={handleAddNationality}
                        />

                        <Text style={styles.label}>Total:</Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            {" "}
                            Nationality (Galley Crew) number:
                        </Text>
                        {formState.nationalityGalleyCrew.nationalities.map(
                            (nationality, index) => (
                                <NationalityInput
                                    key={index}
                                    nationality={nationality.nationality}
                                    numberOfPeople={nationality.numberOfPeople}
                                    onNationalityChange={(text) =>
                                        handleNationalityGalleyCrewChange(
                                            text,
                                            index
                                        )
                                    }
                                    onNumberOfPeopleChange={(text) =>
                                        handleNumberOfPeopleGalleyCrewChange(
                                            text,
                                            index
                                        )
                                    }
                                    onDecreaseNumberOfPeople={() =>
                                        handleDecreaseNumberOfPeopleGalleyCrew(
                                            index
                                        )
                                    }
                                    onIncreaseNumberOfPeople={() =>
                                        handleIncreaseNumberOfPeopleGalleyCrew(
                                            index
                                        )
                                    }
                                    onRemoveNationality={() =>
                                        handleRemoveNationalityGalleyCrew(index)
                                    }
                                />
                            )
                        )}
                        <Button
                            title="Add Nationality"
                            onPress={handleAddNationalityGalleyCrew}
                        />
                    </View>
                    {/* Responsibilities */}
                    <View style={styles.formContainer}>
                        <Text style={styles.sectionLabel}>
                            Responsibilities
                        </Text>
                        <Text style={styles.label}>Order Responsibility:</Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            {" "}
                            Ration Report Responsibility:
                        </Text>
                        <TextInput style={styles.textInput} />
                        <Text style={styles.label}>
                            Inventory Responsibility:
                        </Text>
                        <TextInput style={styles.textInput} />
                    </View>
                    {/* Provision Areas */}
                    <View style={styles.formContainer}>
                        <Text style={styles.sectionLabel}>Provision Areas</Text>
                        <Text style={styles.label}>Galley:</Text>
                        <Likert />
                    </View>
                </React.Fragment>
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
