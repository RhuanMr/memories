import React from "react";
import { View, ImageBackground, Text} from "react-native";
import Header from "../Header";
import CardPage from "./components/AppCardComponent";
import styles from "./styles";

const image = require("../../../assets/App.jpg")

const PageComponent = ({children, backButton, onPress}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.content} source={image} resizeMode="cover">
                <Header backButton={backButton} onPress={onPress} />
                <CardPage>
                    {
                        children
                    }
                </CardPage>
            </ImageBackground>
        </View>
    );
}

export default PageComponent;