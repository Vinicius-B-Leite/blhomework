import React from 'react';
import AuthContextProvider from './authContext';
import ChatContextProvider from './chatContext';
import ClassrommProvider from './classroomContext';
import HomeworkProvider from './homeworkContext';
import NotificationProvider from './notificationContext';
import ThemeContextProvider from './themeContext';

export default function Contexts({ children }) {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <ClassrommProvider>
                    <HomeworkProvider>
                        <NotificationProvider>
                            <ChatContextProvider>
                                {children}
                            </ChatContextProvider>
                        </NotificationProvider>
                    </HomeworkProvider>
                </ClassrommProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}