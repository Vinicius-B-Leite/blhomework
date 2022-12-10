import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import Classroom from '../../screens/Classroom';
import Home from '../../screens/Home';


const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            detachPreviousScreen: false,
            cardStyle:{backgroundColor:  'transparent'},
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Classroom' component={Classroom} />
        </Stack.Navigator>
    );
}