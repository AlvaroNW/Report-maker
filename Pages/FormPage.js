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
import { likertRatings } from "../Utils/LikertRatings";

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
        galley: {
            likert: "Poor",
            comments: "",
        },
        officerPantry: {
            likert: "Poor",
            comments: "",
        },
        officerMessroom: {
            likert: "Poor",
            comments: "",
        },
        crewPantry: {
            likert: "Poor",
            comments: "",
        },
        crewMessroom: {
            likert: "Poor",
            comments: "",
        },
        chillerFruitsAndVegetables: {
            likert: "Poor",
            comments: "",
        },
        chillerDairy: {
            likert: "Poor",
            comments: "",
        },
        freezerMeat: {
            likert: "Poor",
            comments: "",
        },
        freezerFish: {
            likert: "Poor",
            comments: "",
        },
        dryStore: {
            likert: "Poor",
            comments: "",
        },
        dutyMeshroom: {
            likert: "Poor",
            comments: "",
        },
        overall: {
            likert: "Poor",
            comments: "",
        },

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

    // Handlers
    const startCameraHandler = () => {
        setStartCamera(true);
    };

    const handleChangeText = (inputName, value, nestedObject = "") => {
        if (nestedObject) {
            setFormState((prevState) => ({
                ...prevState,
                [nestedObject]: {
                    ...prevState[nestedObject],
                    [inputName]: value,
                },
            }));
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [inputName]: value,
            }));
        }
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

    const handleLikertChange = (fieldName, value) => {
        const selectedRating = likertRatings.find(
            (rating) => rating.value === value
        );
        const label = selectedRating ? selectedRating.label : "";
        setFormState((prevState) => ({
            ...prevState,
            [fieldName]: {
                ...prevState[fieldName],
                likert: label,
            },
        }));
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

                        <Likert
                            likertValue={formState.galley.likert}
                            onLikertChange={(value) =>
                                handleLikertChange("galley", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.galley.comments}
                            onChangeText={(value) =>
                                handleChangeText("comments", value, "galley")
                            }
                        />

                        <Text style={styles.label}>Officer Pantry:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("officerPantry", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.officerPantry.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "officerPantry"
                                )
                            }
                        />
                        <Text style={styles.label}>Officer Messroom:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("officerMessroom", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.officerMessroom.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "officerMessroom"
                                )
                            }
                        />

                        <Text style={styles.label}>Crew Pantry:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("crewPantry", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.crewPantry.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "crewPantry"
                                )
                            }
                        />

                        <Text style={styles.label}>Crew Messroom:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("crewMessroom", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.crewMessroom.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "crewMessroom"
                                )
                            }
                        />

                        <Text style={styles.label}>
                            Chiller Fruits and Vegetables:
                        </Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange(
                                    "chillerFruitsAndVegetables",
                                    value
                                )
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={
                                formState.chillerFruitsAndVegetables.comments
                            }
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "chillerFruitsAndVegetables"
                                )
                            }
                        />

                        <Text style={styles.label}>Chiller Dairy:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("chillerDairy", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={
                                formState.chillerDairy.comments
                            }
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "chillerDairy"
                                )
                            }
                        />

                        <Text style={styles.label}>Freezer Meat:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("freezerMeat", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.freezerMeat.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "freezerMeat"
                                )
                            }
                        />

                        <Text style={styles.label}>Freezer Fish:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("freezerFish", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.freezerFish.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "freezerFish"
                                )
                            }
                        />

                        <Text style={styles.label}>Dry Store:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("dryStore", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.dryStore.comments}
                            onChangeText={(value) =>
                                handleChangeText("comments", value, "dryStore")
                            }
                        />

                        <Text style={styles.label}>Duty Messroom:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("dutyMeshroom", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.dutyMeshroom.comments}
                            onChangeText={(value) =>
                                handleChangeText(
                                    "comments",
                                    value,
                                    "dutyMeshroom"
                                )
                            }
                        />

                        <Text style={styles.label}>Overall:</Text>
                        <Likert
                            onLikertChange={(value) =>
                                handleLikertChange("overall", value)
                            }
                        />
                        <TextInput
                            style={styles.textInputSlider}
                            value={formState.overall.comments}
                            onChangeText={(value) =>
                                handleChangeText("comments", value, "overall")
                            }
                        />
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
    textInputSlider: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 25,
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
