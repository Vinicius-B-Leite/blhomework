import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home'
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'
import { colors } from '../theme/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon } from 'native-base';



const Tab = createBottomTabNavigator()

export default function AppRoutes() {
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.blackBackgroundColor,
                height: '8%',
                borderTopWidth: 0
            },
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
        }} >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <Icon as={Feather} name='home' size={7} color={focused ? colors.contrast : colors.disableContrast} />,
                }} />
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => <Icon as={Ionicons} name='chatbox' size={7} color={focused ? colors.contrast : colors.disableContrast} />,
                }} />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => <Icon as={AntDesign} name='user' size={7} color={focused ? colors.contrast : colors.disableContrast} />,
                }} />
        </Tab.Navigator>
    );
}