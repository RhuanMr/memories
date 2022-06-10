import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image} from "react-native";
import styles from "./styles";

const edit = require('../../../../assets/icons/edit.png')

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
                    <Image source={edit} />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CardFeed;