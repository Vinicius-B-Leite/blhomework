import React, { createContext, useState } from 'react';
import { icons } from '../theme/icons'
import { borderRadius } from '../theme/borderRadius'
import { font } from '../theme/font'
import { darkColors } from '../theme/darkColors'
import { lightColors } from '../theme/lightColors'

export const ThemeContext = createContext()



export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState({icons, borderRadius, font, colors: {...darkColors}, lightColors})

    function changeTheme(theme){
        if (theme === 'dark'){
            setTheme(oldTheme => ({...oldTheme, colors: {...darkColors}}))
            return
        }

        setTheme(oldTheme => ({...oldTheme, colors: {...lightColors}}))

    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}