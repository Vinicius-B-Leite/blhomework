import React from 'react';
import { StatusBar, View } from 'react-native';
import Login from './src/screens/Login';

import AuthContextProvider  from './src/contexts/authContext'
import ClassrommProvider  from './src/contexts/classroomContext'
import Routes from './src/routes'

export default function App() {
  return (
    <AuthContextProvider>
      <ClassrommProvider>
        <StatusBar />
        <Routes/>
      </ClassrommProvider>
    </AuthContextProvider>
  );
}