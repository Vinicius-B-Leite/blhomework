import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import LoginRoutes from './login.route';
import auth from '@react-native-firebase/auth'
import AppRoutes from './app.route';
import { AuthContext } from '../contexts/authContext';




export default function Routes() {
    const { user } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {
                !!user ? <AppRoutes /> : <LoginRoutes />
            }
        </NavigationContainer>
    );
}