import React from "react";
import { View, TextInput, TouchableOpacity, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NationalityInput = ({
    nationality,
    numberOfPeople,
    onNationalityChange,
    onNumberOfPeopleChange,
    onDecreaseNumberOfPeople,
    onIncreaseNumberOfPeople,
    onRemoveNationality,
}) => {
    const handleNationalityTextChange = (text) => {
        onNationalityChange(text);
    };

    const handleNumberOfPeopleTextChange = (text) => {
        onNumberOfPeopleChange(text);
    };

    return (
        <View>
            <TextInput
                style={styles.textInput}
                value={nationality}
                placeholder="Enter nationality"
                onChangeText={handleNationalityTextChange}
            />
            <View style={styles.numberInputContainer}>
                <TouchableOpacity
                    onPress={onDecreaseNumberOfPeople}
                    style={styles.numberButton}
                >
                    <Ionicons name="remove-outline" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                    style={styles.numberInput}
                    value={numberOfPeople.toString()}
                    placeholder="Number of people"
                    onChangeText={handleNumberOfPeopleTextChange}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    onPress={onIncreaseNumberOfPeople}
                    style={styles.numberButton}
                >
                    <Ionicons name="add-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Button title="Remove" onPress={onRemoveNationality} />
        </View>
    );
};
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    numberInputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    numberButton: {
        padding: 5,
        marginHorizontal: 5,
    },
    numberInput: {
        flex: 1,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
    },
});
export default NationalityInput;
