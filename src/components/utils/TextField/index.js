import React from 'react';
import {TextInput, View} from 'react-native';
import COLORS from '../../../styles/colors';
import styles from './styles';

const TextField = props => (
    <View style={styles.container}>
        <TextInput
            style={styles.TextField}
            placeholderTextColor={COLORS.TEXT}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText} 
            value={props.value}
            secureTextEntry={props.secureTextEntry}
        />
    </View>
)

export default TextField;