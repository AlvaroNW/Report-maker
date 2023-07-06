import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";


export default function Likert() {
    const [sliderValue, setSliderValue] = useState(1);
    console.log(sliderValue);

    const likertRatings = [
        { value: 1, label: "Poor" },
        { value: 2, label: "Average" },
        { value: 3, label: "Good" },
        { value: 4, label: "Very Good" },
        { value: 5, label: "Excelent" },
    ]
    const selectedRating = likertRatings.find((rating) => rating.value === sliderValue);

    return (
        <View style={styles.container}>
            <Text>{selectedRating ? selectedRating.label : ''}</Text>
            <Slider 
                style={{ width: 200, height: 40 }}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="green"
                maximumTrackTintColor="red"
                step={1}
                onValueChange={(value) => setSliderValue(parseFloat(value))}
            
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        margin: 8,
        padding: 8,
        borderColor: "#000000",
        borderWidth: 1,
        alignSelf: "stretch",
    },
});
