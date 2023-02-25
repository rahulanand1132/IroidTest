import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();
import LoginScreen from '../screens/login/login';
import HomeScreen from '../screens/home/home';

const MainNavigator = ()=>(
    <MainStack.Navigator>
        <MainStack.Screen name="Login Screen" component={LoginScreen} options={{headerShown:false}}/>
        <MainStack.Screen name = "Home Screen" component={HomeScreen} options={{headerShown:false}}/>
    </MainStack.Navigator>
);

export default MainNavigator;