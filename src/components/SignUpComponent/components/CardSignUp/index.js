import React from "react";
import { View, Text, Image } from "react-native";
import AuthActionButton from "../../../utils/AuthActionButton";
import TextField from "../../../utils/TextField";
import SignUpFormHook from "./hooks";
import styles from "./styles";

const image = require("../../../../assets/Logo.png");

const CardSignUp = () => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        confirmedPassword, 
        setConfirmedPassword,
        name,
        setName, 
        nick, 
        setNick,
        handleSignUp
    } = SignUpFormHook();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            <View style={styles.containerCards}>
                <TextField 
                placeholder="Email"
                value={email}
                onChangeText={ element => setEmail(element) }
                />
                <TextField 
                placeholder="Name"
                value={name}
                onChangeText={ element => setName(element) }
                />
                <TextField 
                placeholder="Password"
                value={password}
                onChangeText={ element => setPassword(element) }
                secureTextEntry={true}
                />
                <TextField 
                placeholder="Confirmed Password"
                value={confirmedPassword}
                onChangeText={ element => setConfirmedPassword(element) }
                secureTextEntry={true}
                />
                <TextField 
                placeholder="Nickname"
                value={nick}
                onChangeText={ element => setNick(element) }
                />
            </View>
            <AuthActionButton title="SignUp" onPress={() => handleSignUp()}/>
        </View>
    );
}

export default CardSignUp;