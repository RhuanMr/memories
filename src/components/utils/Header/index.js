import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const logo = require('../../../assets/Logo.png')

const Header = props => (
    <View style={styles.container}>
        <View style={styles.contentLeft}>
        { props.backButton &&
            <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
               <Icon size={40} name="chevron-thin-left" color="#000" />
            </TouchableOpacity>
        }
        </View>
        <View style={styles.contentCenter}>
            <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.contentRight}/>
    </View>
)

export default Header;