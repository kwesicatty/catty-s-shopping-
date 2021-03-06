import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './screens/Home';
import DetailsSceeen from './screens/Details';
import LoginScreen from './screens/Login';
import {StatusBar} from 'react-native';
import COLORS from './assets/Color';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator initialRouteName={"LoginScreen"}
      screenOptions={{header: () => null}}>
         <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;