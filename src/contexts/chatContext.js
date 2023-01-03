import React, { createContext, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthContext } from './authContext';
import groupBy from 'lodash.groupby';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotifcationContext } from './notificationContext'

export const ChatContext = createContext()

export default function ChatContextProvider({ children }) {

    const { user } = useContext(AuthContext)
    const { getTokensOfStudents, sendNotification } = useContext(NotifcationContext)
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])

    async function getLastMessage(docID) {
        const documentSnapshot = await firestore()
            .collection('classroom')
            .doc(docID)
            .collection('chat')
            .doc('chatroom')
            .get()


        return documentSnapshot?.data()?.lastMessage
    }

    async function getChats() {
        const querySnapshot = await firestore().collection('classroom').where('students', 'array-contains', user.uid).get()

        let arrayChats = []

        for (const doc of querySnapshot.docs) {

            arrayChats.push({
                avatarURL: doc.data().avatarURL,
                name: doc.data().name,
                lastMessage: await getLastMessage(doc.id),
                id: doc.id
            })

        }

        setChats(arrayChats)
    }

    async function getMessageOwnerCredencials(uid) {
        const ref = firestore().collection('users').doc(uid)
        const data = await ref.get()
        return data.data()
    }

    function orderMessagesArray(array) {
        const groupedList = Object.values(groupBy(array, (n) => {
            const d = n.createAt.toDate()
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
        }))

        let groupedListWithTitle = []

        groupedList.forEach((d) => {
            groupedListWithTitle.push({
                title: format(new Date(d[0].createAt.toDate()), 'PP', { locale: ptBR }),
                data: [...d]
            })
        })

        return groupedListWithTitle
    }

    async function setLastMessageRead(chatId, message) {
        await AsyncStorage.setItem(`_lastMessage/${chatId}`, JSON.stringify(message))
    }

    async function getLastMessageRead(chatId) {
        return JSON.parse(await AsyncStorage.getItem(`_lastMessage/${chatId}`))
    }

    async function getNumberOfMessagesUnread(chatId) {
        const asyncstorageLastMessage = await getLastMessageRead(chatId)

        if (!asyncstorageLastMessage) return

        const lastMessageRead = new Date(asyncstorageLastMessage)

        const docs = await firestore()
            .collection('classroom')
            .doc(chatId)
            .collection('chat')
            .doc('chatroom')
            .collection('messages')
            .orderBy('createAt')
            .startAfter(lastMessageRead)
            .get()

        return docs.size

    }

    async function getMessages(classroomID) {
        const ref = firestore()
            .collection('classroom')
            .doc(classroomID)
            .collection('chat')
            .doc('chatroom')
            .collection('messages')
            .orderBy('createAt', 'desc')

        return ref.onSnapshot(async (querySnapshot) => {

            let messageArray = []

            for (const doc of querySnapshot.docs) {
                const { photoURL, displayName } = await getMessageOwnerCredencials(doc.data().owner)
                messageArray.push({
                    ...doc.data(),
                    userPhotoURL: photoURL,
                    userName: displayName
                })
            }
            setLastMessageRead(classroomID, messageArray[0].createAt.toDate())
            setMessages(orderMessagesArray(messageArray))
        })
    }

    async function sendMessage({ message, image, classroomId }) {
        
        if (message === '' && !image) return


        const messageCollectionRef = firestore().collection('classroom').doc(classroomId).collection('chat').doc('chatroom').collection('messages')
        const lastMessageRef = firestore().collection('classroom').doc(classroomId).collection('chat').doc('chatroom')

        const data = {
            createAt: firestore.FieldValue.serverTimestamp(),
            message: message || '',
            owner: user.uid,
            system: false,
            imageURL: ''
        }

        if (image) {
            const storageRef = storage().ref(`files/${classroomId}/chatroom/${image.name}`)
            await storageRef.putFile(image.fileCopyUri)
            data.imageURL = await storageRef.getDownloadURL()

        }
        await lastMessageRef.set({
            lastMessage: data.message || 'photo',
        })

        await sendNotification({
            tokens: (await getTokensOfStudents(classroomId)).filter(tok=>tok!==user.uid),
            title: (await firestore().collection('classroom').doc(classroomId).get()).data().name,
            body: data.message !== '' ? data.message : 'imagem'
        })

        await messageCollectionRef.add(data)

    }

    return (
        <ChatContext.Provider value={{ getChats, chats, getLastMessage, getMessages, messages, sendMessage, getNumberOfMessagesUnread }}>
            {children}
        </ChatContext.Provider>
    );
}