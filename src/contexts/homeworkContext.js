import React, { createContext, useContext, useState } from 'react';
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'

import { AuthContext } from './authContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotifcationContext } from './notificationContext';



export const HomeworkContext = createContext()

export default function HomeworkProvider({ children }) {

    const { getTokensOfStudents, sendNotification } = useContext(NotifcationContext)

    const [filesOnUploading, setFilesOnUploading] = useState([])
    const { user } = useContext(AuthContext)
    const [homeworks, setHomeworks] = useState([])
    const [homeworksDone, setHomeworksDone] = useState([])
    const [loading, setLoading] = useState([])


    const [subjectSelected, setSubjectSelected] = useState(0)
    const [dateSelected, setDateSelected] = useState(new Date())

    const [homeworkID, setHomeworkID] = useState(generateHomeworkID().id)

    function generateHomeworkID(classroomID) {
        return firestore().collection('classroom').doc(classroomID).collection('homeworks').doc()
    }

    function sendToStorage(classroomID, files) {

        files?.forEach(async (file) => {

            const task = storage().ref(`files/${classroomID}/homeworks/${homeworkID}/${file.name}`).putFile(file.fileCopyUri)

            task.on('state_changed', taskSnapshot => {

                var porcent = (taskSnapshot.bytesTransferred * 100) / taskSnapshot.totalBytes

                setFilesOnUploading(old => {
                    const index = old.findIndex((element) => {
                        return element.name === file.name
                    })

                    if (index === -1) {
                        old.push({
                            ...file,
                            ref: `files/${classroomID}/homeworks/${homeworkID}/${file.name}`,
                            porcentage: porcent
                        })
                    }
                    else {
                        old[index].porcentage = porcent
                    }

                    return [...old]
                })

            })
        })
    }

    async function stopSendToStorage({ fileName, classroomID, index }) {

        function removeThisItem() {
            setFilesOnUploading(old => {
                let index = old.findIndex((element) => {
                    return element.name === fileName
                })

                old.splice(index, 1)

                return [...old]
            })
        }

        if (filesOnUploading[index].porcentage === 100) {
            await storage().ref(`files/${classroomID}/homeworks/${homeworkID}/${fileName}`).delete()
            removeThisItem()
        }


    }
    function resetAllStates() {
        setFilesOnUploading([])
        setSubjectSelected()
        setDateSelected(new Date())
        setHomeworkID(generateHomeworkID().id)
    }
    async function createHomework({ title, description, classroomID, callback }) {
        const isAnyFileUploading = filesOnUploading.findIndex((value) => value.porcent !== 100)

        if (filesOnUploading.length > 0 && isAnyFileUploading > 0) return

        else if (title !== '' && description !== '' && classroomID && subjectSelected) {

            const classroomRef = firestore().collection('classroom').doc(classroomID)
            const homeworkRef = classroomRef.collection('homeworks').doc(homeworkID)
            console.log("🚀 ~ file: homeworkContext.js:102 ~ createHomework ~ homeworkRef:", homeworkRef)

            const data = {
                title,
                description,
                deadline: dateSelected,
                subject: subjectSelected,
                filesRefs: filesOnUploading.map(file => (file.ref))
            }

            const [tokens, classroomData] = await Promise.all([
                getTokensOfStudents(classroomID),
                classroomRef.get(),
                homeworkRef.set(data),
            ])

            callback()
            resetAllStates()

            await sendNotification({
                title: classroomData.data().name,
                body: `Nova tarfa de ${data.subject.name} para ${data.deadline.getDate()}/${data.deadline.getMonth() + 1} \n${title}`,
                tokens
            })
        }

    }

    async function getHomeworks(key) {
        setLoading(true)

        let homeworksList = []

        const [data, classroomResponse] = await Promise.all([
            firestore()
                .collection('classroom')
                .doc(key)
                .collection('homeworks')
                .orderBy('deadline', 'asc')
                .get(),
            firestore().collection('classroom').doc(key).get()
        ])


        const isAdmin = classroomResponse.data().owner === user.uid 

        data?.docs?.forEach((doc) => {
            homeworksList.push({
                ...doc.data(),
                id: doc.id,
                classroomID: key,
                isAdmin
            })
        })
        await getHomeworksDone(key)
        setHomeworks(homeworksList)
        setLoading(false)
    }



    async function getHomeworkFiles(ref, callback) {
        setLoading(true)

        const refStorage = storage().ref(ref)
        const [url, metadata] = await Promise.all([refStorage.getDownloadURL(), refStorage.getMetadata()])

        const file = {
            url,
            name: metadata.name,
            ext: metadata.contentType
        }

        setLoading(false)
        callback(file)
    }

    async function setHomeworkDoneStatus(homeworkID, classrromID, status) {

        let homeworkList = await AsyncStorage.getItem(`_${classrromID}`)
        homeworkList = JSON.parse(homeworkList)

        if (homeworkList !== null) {

            if (homeworkList.includes(homeworkID) || status === 'remove') {
                homeworkList.splice(homeworkList.indexOf(homeworkID), 1)
            }
            else {
                homeworkList.push(homeworkID)
            }

            setHomeworksDone(homeworkList)
            await AsyncStorage.setItem(`_${classrromID}`, JSON.stringify(homeworkList))
            return
        }


        await AsyncStorage.setItem(`_${classrromID}`, JSON.stringify([homeworkID]))
    }

    async function getHomeworksDone(classrromID) {
        const data = await AsyncStorage.getItem(`_${classrromID}`)

        setHomeworksDone(data === null ? [] : JSON.parse(data))
    }
    return (
        <HomeworkContext.Provider value={{
            sendToStorage,
            subjectSelected,
            setSubjectSelected,
            dateSelected,
            setDateSelected,
            filesOnUploading,
            setFilesOnUploading,
            createHomework,
            getHomeworks,
            loading,
            homeworks,
            setHomeworks,
            stopSendToStorage,
            getHomeworkFiles,
            setHomeworkDoneStatus,
            homeworksDone
        }}>
            {children}
        </HomeworkContext.Provider>
    );
}