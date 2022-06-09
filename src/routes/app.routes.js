import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/App/Home';
import Memorie from '../pages/App/MemoriePage';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
        />
        <AppStack.Screen 
            name="Memorie"
            component={Memorie}
            options={{headerShown: false}}
        />
    </AppStack.Navigator>
);

export default AppRoutes;