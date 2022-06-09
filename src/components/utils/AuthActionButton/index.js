import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import COLORS from '../../../styles/colors';
import styles from './styles';

const AuthActionButton = props => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.Title}>{props.title}</Text>
    </TouchableOpacity>
)

export default AuthActionButton;