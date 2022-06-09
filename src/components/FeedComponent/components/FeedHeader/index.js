import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";

const FeedHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.Title}>My memories</Text>
                <TouchableOpacity style={styles.plusButton}>
                    <Icon name="pluscircleo" color="#000" size={25} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Icon name="search1" color="#000" size={25} />
            </TouchableOpacity>
        </View>
    );
}

export default FeedHeader;