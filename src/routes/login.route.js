import React from 'react';
import Login from '../screens/Login'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

export default function LoginRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
        }}>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    );
}