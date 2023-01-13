import React, { createContext, useEffect, useState } from 'react';
import { icons } from '../theme/icons'
import { borderRadius } from '../theme/borderRadius'
import { font } from '../theme/font'
import { darkColors } from '../theme/darkColors'
import { lightColors } from '../theme/lightColors'
import AsyncStorage from '@react-native-async-storage/async-storage'




export const ThemeContext = createContext()



export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState({ icons, borderRadius, font, colors: { ...darkColors }, lightColors })

    useEffect(() => {
        getAsyncStorageTheme()

    }, [])

    async function getAsyncStorageTheme() {
        const cacheTheme = await AsyncStorage.getItem('_theme')

        if (cacheTheme === 'light') {
            setTheme(old => ({ ...old, colors: { ...lightColors } }))
        }
    }

    function changeTheme(theme) {
        if (theme === 'dark') {
            setTheme(oldTheme => ({ ...oldTheme, colors: { ...darkColors } }))
            AsyncStorage.setItem('_theme', 'dark')
            return
        }

        setTheme(oldTheme => ({ ...oldTheme, colors: { ...lightColors } }))
        AsyncStorage.setItem('_theme', 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}