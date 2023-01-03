import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Classroom from '../../screens/Classroom';
import CreateHomework from '../../screens/CreateHomework';
import Homework from '../../screens/Homework';


const Stack = createStackNavigator()

export default function ClassroomStack(route) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            detachPreviousScreen: false,
            cardStyle:{backgroundColor:  'transparent'},
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <Stack.Screen name='Classroom' component={Classroom} />
            <Stack.Screen name='CreateHomework' component={CreateHomework} />
            <Stack.Screen name='Homework' component={Homework} />
        </Stack.Navigator>
    );
}