import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import AuthActionButton from "../../../utils/AuthActionButton";
import TextField from "../../../utils/TextField";
import SignInCardHooks from "./hooks";
import styles from "./styles";

const image = require("../../../../assets/Logo.png");

const Card = () => {
    const navigation = useNavigation();
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn
    } = SignInCardHooks();

    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.containerCards}>
                <TextField 
                placeholder="Email"
                value={email}
                onChangeText={ element => setEmail(element) }
                />
                <TextField 
                placeholder="Password"
                value={password}
                onChangeText={ element => setPassword(element) }
                secureTextEntry={true} 
                />
                <View style={styles.containerButtons}>
                    <AuthActionButton title="SignIn" onPress={() => handleSignIn()} />
                    <AuthActionButton title="SignUp" onPress={() => navigation.navigate('SignUp')}/>
                </View>
            </View>
        </View>
    );
}

export default Card;