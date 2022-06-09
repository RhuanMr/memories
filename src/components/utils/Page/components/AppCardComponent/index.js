import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const CardPage = ({children}) => {

    return (
        <View style={styles.container}>
            {
                children
            }
        </View>
    );
}

export default CardPage;