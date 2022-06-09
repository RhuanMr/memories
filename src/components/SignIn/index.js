import React from "react";
import { View, ImageBackground} from "react-native";
import Card from "./components/card";
import styles from "./styles";

const image = require("../../assets/SignIn.png");

const Login = () => (
    <View style={styles.container}>
        <ImageBackground style={styles.content} source={image} resizeMode="cover">
            <Card />
        </ImageBackground>
    </View>
);

export default Login;