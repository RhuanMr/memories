import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import COLORS from "../../../../styles/colors";
import styles from "./styles";

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
                    <Icon name="edit" size={25} color={COLORS.TEXT} />
                </TouchableOpacity>
            </View>        
        </ScrollView>
    );
}

export default CardMemorie;