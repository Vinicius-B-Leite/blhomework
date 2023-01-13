import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import LoginRoutes from './login.route';
import AppRoutes from './app.route';
import { AuthContext } from '../contexts/authContext';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';




export default function Routes() {
    const { user } = useContext(AuthContext)
    const theme = useTheme()
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={theme.colors.backgrounbColor} barStyle={theme.colors.backgrounbColor === '#fff' ? 'dark-content' : 'light-content'} />

            {
                !!user ? <AppRoutes /> : <LoginRoutes />
            }
        </NavigationContainer>
    );
}