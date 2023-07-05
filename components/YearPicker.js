
import { SelectList } from 'react-native-dropdown-select-list'
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image, ScrollView } from "react-native";

export const YearPicker = ({ setFormState }) => {
    const [selected, setSelected] = useState("");

    const currentYear = new Date().getFullYear();
    const yearOptions = [];

    for (let i = 0; i < 100; i++) {
        const year = currentYear - i;
        yearOptions.push({ label: year.toString(), value: year });


    }

    const handleValueChange = (value) => {
        setSelected(value);
        setFormState((prevState) => ({ ...prevState, year: value }));
    };

    return(
        <SelectList 
            setSelected={handleValueChange} 
            data={yearOptions} 
            save="value"
        />
    )
}