import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, Button } from "react-native";
import ImageViewer from "../components/ImageViewer.js";
import FormButton from "../components/FormButton";


const backgroundImage = require("../assets/HMS.jpg");
const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer backgroundImageSource={backgroundImage} />
            </View>
            <View style={styles.footerContainer}>
                <FormButton theme="primary" label="Fill Report" navigation={navigation}/>
                <FormButton theme="primary" label="Use this photo" navigation={navigation}/>
            </View>
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: height * 0.1,
        marginBottom: height * 0.03,
    },
    image: {
        width: width * 0.8,
        height: height * 0.4,
        borderRadius: 18,
    },
    formContainer: {
        flex: 1,
        marginHorizontal: width * 0.05,
        marginTop: height * 0.03,
    },
    footerContainer: {
        position: "absolute",
        bottom: height * 0.2,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: height * 0.15,
    },
});
