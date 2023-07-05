import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Button,
    SafeAreaView,
} from "react-native";

export const DatePicker = ({ setFormState }) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date; // If no date is selected, maintain the current date
        setShow(false);
        setDate(currentDate);
        setFormState((prevState) => ({ ...prevState, date: currentDate }));
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <SafeAreaView>
            <Button onPress={showDatepicker} title="Select a date!" />
            <Text>Selected: {date.toLocaleDateString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date" 
                    display="default"
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    );
};
