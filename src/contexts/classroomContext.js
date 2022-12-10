import React, { createContext, useContext, useState } from 'react';
import { Keyboard, View } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { AuthContext } from './authContext';

export const ClassroomContext = createContext()

export default function ClassrommProvider({ children }) {

    const { user, setIsOwner } = useContext(AuthContext)

    const [classroomID, setClassroomID] = useState()
    const [classrooms, setClassrooms] = useState([])
    const [loadingCreateClassroom, setLoadingCreateClassroom] = useState(false)
    const [loadingEnterClassroom, setLoadingEnterClassroom] = useState(false)


    async function sendImageToStorage(newKey, file) {
        const ref = storage().ref(`files/${newKey}/avatar`)
        await ref.putFile(file)

        return await ref.getDownloadURL()
    }

    async function createClassRoom(photo, name) {

        if (photo && name != '') {
            setLoadingCreateClassroom(true)
            let newKey = await firestore().collection('classroom').doc().id
            let avatarURL = await sendImageToStorage(newKey, photo)

            firestore().collection('classroom').doc(newKey).set({
                avatarURL,
                owner: user.uid,
                students: [user.uid],
                name: name
            }).then(documentReference => {
                setClassroomID(newKey)
                Keyboard.dismiss()
            }).finally(() => setLoadingCreateClassroom(false))
        }
    }

    async function getClassroom() {
        return firestore()
            .collection('classroom')
            .where('students', 'array-contains', user.uid)
            .onSnapshot(documentSnapshot => {

                let classroomList = []

                documentSnapshot?.docs?.forEach(doc => {
                   
                    
                    classroomList.push({ ...doc.data(), id: doc.id })
                })
                setClassrooms(classroomList)
            })

    }

    async function enterInClassroom(key) {
        setLoadingEnterClassroom(true)

        let studentsList = await firestore()
            .collection('classroom')
            .doc(key)
            .get()

        studentsList.data().students.push(user.uid)
        if (studentsList.exists) {
            await firestore()
                .collection('classroom')
                .doc(key)
                .update(
                    {
                        students: studentsList.data().students
                    }
                )

        }
        setLoadingEnterClassroom(false)
    }

    return (
        <ClassroomContext.Provider value={{
            createClassRoom,
            classroomID,
            classrooms,
            getClassroom,
            loadingCreateClassroom,
            enterInClassroom
        }}>
            {children}
        </ClassroomContext.Provider>
    );
}
