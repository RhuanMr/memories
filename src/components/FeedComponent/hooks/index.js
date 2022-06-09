import {useContext, useState} from 'react';
import { Alert } from 'react-native';

const FeedComponentHooks = (navigation) => {

    const handlePress = (page, item) => {
        navigation.navigate(page, item)
    }

    return { 
        handlePress,
    };

}

export default FeedComponentHooks;