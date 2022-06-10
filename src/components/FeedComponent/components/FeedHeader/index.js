import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./styles";

const plusCircle = require('../../../../assets/icons/plus-circle.png');
const search = require('../../../../assets/icons/search.png');

const FeedHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.Title}>My memories</Text>
                <TouchableOpacity style={styles.plusButton}>
                    <Image source={plusCircle}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Image source={search}/>
            </TouchableOpacity>
        </View>
    );
}

export default FeedHeader;