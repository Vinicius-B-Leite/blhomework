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

        const [tokenFCM, tokenAsyncStorage] = await Promise.all([
            messaging().getToken(),
            AsyncStorage.getItem('_token')
        ])

        if (tokenAsyncStorage !== tokenFCM) {
            await Promise.all([
                firestore().collection('users').doc(user.uid).update({ tokenFCM }),
                AsyncStorage.setItem('_token', JSON.stringify(tokenFCM))
            ])
        }

        console.log(`tokenAsyncStorage:  ${tokenFCM}\ntokenFCM: ${tokenFCM}`)
    }

    async function sendNotification({ title, body, tokens }) {
        await axios.post('https://apiblhomework.onrender.com/notification', {
            title, body, tokens
        })

    }

    async function getTokensOfStudents(classroomID) {

        const [DocumentSnapshot, currentToken] = await Promise.all([
            firestore().collection('classroom').doc(classroomID).get(),
            AsyncStorage.getItem('_token')
        ])
        const tokens = []

        for (const student of DocumentSnapshot.data().students) {
            const { tokenFCM } = (await firestore().collection('users').doc(student).get()).data()
            tokenFCM !== currentToken && tokens.push(tokenFCM)
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