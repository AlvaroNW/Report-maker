import React, { useEffect, useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { Button } from "react-native";
import * as FileSystem from "expo-file-system";

const encodeImageToBase64 = async (imageUri) => {
    const response = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
    });
    return response;
};

const PDFGenerator = ({ formState }) => {
    const [base64Image, setBase64Image] = useState("");


    useEffect(() => {
        const convertImageToBase64 = async () => {
            if (formState.image) {
                const imageBase64 = await encodeImageToBase64(formState.image);
                setBase64Image(imageBase64);
            }
        };
        convertImageToBase64();
    }, [formState.image]);

    const generatePDF = async () => {
        const html = `
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
            </head>
            <body style="text-align: center;">
              <h3 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
                Vessel
              </h3>
              <p>Vessel Name: ${formState.vesselName}</p>
              <p>Owner: ${formState.owner}</p>
              <p>Type: ${formState.type}</p>
              <p>Flag: ${formState.flag}</p>
              <p>IMO: ${formState.IMO}</p>
              <p>Build in Year: ${formState.year}</p>
              <img src="data:image/jpeg;base64,${base64Image}" style="width: 200px; height: 200px;" />
              <h3 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
                Visit
              </h3>
              <p> Date: ${formState.date}</p>

            </body>
          </html>
        `;
    
        const file = await printToFileAsync({ html, base64: true });
        await shareAsync(file.uri);
      };
    return (
        <>
            <Button title="Generate PDF" onPress={generatePDF} />
        </>
    );
};

export default PDFGenerator;
