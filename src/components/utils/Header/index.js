import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const logo = require('../../../assets/Logo.png')
const chevronLeft = require("../../../assets/icons/chevron-left.png")

const Header = props => (
    <View style={styles.container}>
        <View style={styles.contentLeft}>
        { props.backButton &&
            <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
               <Image source={chevronLeft}/>
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