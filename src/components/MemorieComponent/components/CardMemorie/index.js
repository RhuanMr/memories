import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import COLORS from "../../../../styles/colors";
import styles from "./styles";

const edit = require("../../../../assets/icons/edit.png")

const CardMemorie = (props) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <View>
                    <View style={styles.contentTop}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.contentCenter}>
                        <Text style={styles.dateTitle}>{props.date}</Text>
                    </View>
                    <View style={styles.contentBottom} />
                </View>
                <TouchableOpacity style={styles.editButton}>
                    <Image source={edit} />
                </TouchableOpacity>
            </View>        
        </ScrollView>
    );
}

export default CardMemorie;