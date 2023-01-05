import React, { createContext, useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthContext } from './authContext';

export const ClassroomContext = createContext()

export default function ClassrommProvider({ children }) {

    const { user, setIsOwner } = useContext(AuthContext)

    const [classroomID, setClassroomID] = useState()
    const [classrooms, setClassrooms] = useState([])
    const [loading, setLoading] = useState(false)


    async function sendImageToStorage(newKey, file) {
        const ref = storage().ref(`files/${newKey}/avatar`)
        await ref.putFile(file)

        return await ref.getDownloadURL()
    }

    async function createClassRoom({ photo, name, callback }) {

        if (photo && name != '') {
            setLoading(true)
            const classroomRef = firestore().collection('classroom')

            const [newKey, avatarURL] = await Promise.all([
                classroomRef.doc().id,
                sendImageToStorage(newKey, photo)
            ])


            classroomRef.doc(newKey).set({
                avatarURL,
                owner: user.uid,
                students: [user.uid],
                name: name
            }).then(documentReference => {
                setClassroomID(newKey)
                Keyboard.dismiss()
                if (callback) {
                    callback(documentReference)
                }
            })
            setLoading(false)
        }
    }

    async function getClassroom() {
        setLoading(true)
        return firestore()
            .collection('classroom')
            .where('students', 'array-contains', user.uid)
            .onSnapshot(documentSnapshot => {

                let classroomList = []

                documentSnapshot?.docs?.forEach(doc => {


                    classroomList.push({ ...doc.data(), id: doc.id })
                })
                setClassrooms(classroomList)

                setLoading(false)
            })

    }
    async function goOutClassroom({ classroomKey }) {

        const classroomRef = firestore().collection('classroom').doc(classroomKey)

        let { students } = (await classroomRef.get()).data()


        const index = students.indexOf(user.uid)

        if (students.length === 1) {
            await classroomRef.delete()
            return
        }
        await classroomRef.update({ students: students.splice(index, 1) })
    }

    async function enterInClassroom(key, onFinished, setError) {
        setLoading(true)

        if (key === '') return

        const classroomRef = firestore().collection('classroom').doc(key)

        let studentsList = await classroomRef.get()

        if (studentsList.exists) {
            studentsList.data().students.push(user.uid)

            await classroomRef.update(
                {
                    students: studentsList.data().students
                }
            )

            if (onFinished) {
                onFinished()
            }

        } else {
            if (setError) {
                setError()
            }
        }

        setLoading(false)
    }

    return (
        <ClassroomContext.Provider value={{
            createClassRoom,
            classroomID,
            classrooms,
            getClassroom,
            loading,
            enterInClassroom,
            goOutClassroom
        }}>
            {children}
        </ClassroomContext.Provider>
    );
}
