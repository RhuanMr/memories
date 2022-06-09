import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ImageBackground, Text} from "react-native";
import Header from "../utils/Header";
import CardSignUp from "./components/CardSignUp";
import styles from "./styles";

const image = require("../../assets/SignUp.png")

const SignUpComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.content} source={image} resizeMode="cover">
                <Header backButton={true} onPress={() => navigation.goBack()}/>
                <CardSignUp />
            </ImageBackground>
        </View>
    );
}

export default SignUpComponent;