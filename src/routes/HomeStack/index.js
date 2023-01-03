import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../../screens/Home';
import ClassroomStack from '../ClassroomStack';


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
            <Stack.Screen name='ClassroomStack' component={ClassroomStack} />
        </Stack.Navigator>
    );
}