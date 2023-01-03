import React, { useContext } from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/themeContext';
import Routes from './routes';

export default function Index() {
    const { theme } = useContext(ThemeContext)
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}