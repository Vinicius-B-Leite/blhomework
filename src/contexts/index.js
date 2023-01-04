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
                    <NotificationProvider>
                        <HomeworkProvider>
                            <ChatContextProvider>
                                {children}
                            </ChatContextProvider>
                        </HomeworkProvider>
                    </NotificationProvider>
                </ClassrommProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}