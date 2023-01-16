import React, { createContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SubjectContext = createContext()

export default function SubjectProvider({ children }) {
    const [subjects, setSubjects] = useState({})
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getSubjects()
    }, [refresh])

    async function getSubjects() {

        let subj = await AsyncStorage.getItem('_subjects')

        if (!subj) {
            await AsyncStorage.setItem('_subjects', JSON.stringify({ comuns: [{ name: 'Matemática', init: 'MAT', color: '#FF5151', }, { name: 'Biologia', init: 'BIO', color: '#80FFE4', }, { name: 'Língua portuguesa', init: 'LP', color: '#00A3FF', }, { name: 'Geografia', init: 'GEO', color: '#FB8500', }, { name: 'História', init: 'HST', color: '#964C2A', }, { name: 'Química', init: 'QUI', color: '#00A3FF', }, { name: 'Física', init: 'FIS', color: '#00FFD1', }, { name: 'Filosofia', init: 'FIL', color: '#808080', }, { name: 'Ingês', init: 'ING', color: '#EC4CC9', }, { name: 'Educação Física', init: 'EDF', color: '#6100FF' }], mySubjects: [] }))
            subj = await AsyncStorage.getItem('_subjects')
        }

        setSubjects(JSON.parse(subj))
    }

    async function setNewSubject({ name, init, color }) {
        return new Promise(async (resolve, reject) => {
            if (name.length > 0 && init.length > 0 && color.length > 0) {
                setLoading(true)
                setSubjects(oldSubject => ({
                    ...oldSubject,
                    mySubjects: [
                        ...oldSubject.mySubjects,
                        { name, init, color }
                    ]
                })
                )
                await AsyncStorage.setItem('_subjects', JSON.stringify(subjects))
                setLoading(false)
                resolve()
            }

        })
    }

    async function deleteSubject(subj) {

        const comunsIndex = subjects.comuns.findIndex((e, i, a) => e.name === subj.name)
        const mySubjectsIndex = subjects.mySubjects.findIndex((e, i, a) => e.name === subj.name)

        const property = comunsIndex !== -1 ? 'comuns' : 'mySubjects'
        const index = comunsIndex !== -1 ? comunsIndex : mySubjectsIndex

        let newSubjects = subjects
        newSubjects[property].splice(index, 1)

        setSubjects(newSubjects)

        console.log("🚀 ~ file: subjectContext.js:64 ~ deleteSubject ~ newSubjects", newSubjects)

        await AsyncStorage.setItem('_subjects', JSON.stringify(newSubjects))

        setRefresh(!refresh)

    }
    return (
        <SubjectContext.Provider value={{ subjects, setNewSubject, loading, deleteSubject }}>
            {children}
        </SubjectContext.Provider>
    );
}