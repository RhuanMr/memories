import {useContext, useState} from 'react';
import { Alert } from 'react-native';

const MemoriesComponentHooks = (navigation) => {
    
    const handlePress = (page,item) => {
        navigation.goBack()
    }

    return { 
        handlePress,
    };

}

export default MemoriesComponentHooks;