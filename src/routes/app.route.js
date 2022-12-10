import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home'
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../theme';



const Tab = createBottomTabNavigator()

export default function AppRoutes() {
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: theme.colors.blackBackgroundColor,
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
                    tabBarIcon: ({ focused }) => <Feather name='home' size={theme.icons.md} color={focused ? theme.colors.contrast : theme.colors.disableContrast} />,
                }} />
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => <Ionicons name='chatbox' size={theme.icons.md} color={focused ? theme.colors.contrast : theme.colors.disableContrast} />,
                }} />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => <AntDesign name='user' size={theme.icons.md} color={focused ? theme.colors.contrast : theme.colors.disableContrast} />,
                }} />
        </Tab.Navigator>
    );
}