import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from "../pages/Auth/SignIn"
import SignUp from '../pages/Auth/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen 
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
        />
        <AuthStack.Screen 
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
        />
    </AuthStack.Navigator>
);

export default AuthRoutes;