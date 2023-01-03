import React, { createContext, useContext, useEffect } from 'react';
import messaging from '@react-native-firebase/messaging'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './authContext'
import axios from 'axios';




export const NotifcationContext = createContext()

export default function NotificationProvider({ children }) {

    const { user } = useContext(AuthContext)

    async function getToken() {
        const tokenFCM = await messaging().getToken()
        const tokenAsyncStorage = await AsyncStorage.getItem('_token')

        if (tokenAsyncStorage !== tokenFCM) {
            await firestore().collection('users').doc(user.uid).update({ tokenFCM })
            await AsyncStorage.setItem('_token', JSON.stringify(tokenFCM))
        }

        console.log(`tokenAsyncStorage:  ${tokenFCM}\ntokenFCM: ${tokenFCM}`)
    }

    async function sendNotification(title, body, tokens) {
        await axios.post('https://apiblhomework.onrender.com/notification', {
            title, body, tokens
        })

    }

    async function getTokensOfStudents(classroomID) {
        const { students } = (await firestore().collection('classroom').doc(classroomID).get()).data()
        const tokens = []

        for (const student of students) {
            const { tokenFCM } = (await firestore().collection('users').doc(student).get()).data()
            tokens.push(tokenFCM)
        }

        return tokens
    }
    useEffect(() => {

        messaging().onMessage(message => {
            console.log(message)
        })

    }, [])

    return (
        <NotifcationContext.Provider value={{ getToken, sendNotification, getTokensOfStudents }}>
            {children}
        </NotifcationContext.Provider>
    );
}