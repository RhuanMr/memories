import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";

const MemoriesHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.Title}>My memorie</Text>
            </View>
        </View>
    );
}

export default MemoriesHeader;