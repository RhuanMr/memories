import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";

const CardFeed = props => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
                <View>
                    <View style={styles.contentTop}>
                        <Text style={styles.dateTitle}>{props.date}</Text>
                    </View>
                    <View style={styles.contentCenter}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.contentBottom} />
                </View>
                <TouchableOpacity style={styles.editButton} onPress={props.edit}>
                    <Icon name="edit" size={25} color="#000" />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CardFeed;