import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import COLORS from './src/styles/colors';
import AuthProvider from './src/contexts/authContext';

const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.STATUS_BAR} barStyle="light-content" />
        <Routes />
      </View>
    </AuthProvider>
  </NavigationContainer>
);

export default App;
