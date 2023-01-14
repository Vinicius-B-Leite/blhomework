import React, { createContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SubjectContext = createContext()

export default function SubjectProvider({children}) {
    const [subjects, setSubjects] = useState({})

    useEffect(() => {
        getSubjects()
    }, [])

    async function getSubjects() {
        const subj = await AsyncStorage.getItem('_subjects')

        if (!subj) {
            await AsyncStorage.setItem('_subjects', JSON.stringify([{name: 'Matemática',init: 'MAT',color: '#FF5151',},{name: 'Biologia',init: 'BIO',color: '#80FFE4',},{name: 'Língua portuguesa',init: 'LP',color: '#00A3FF',},{name: 'Geografia',init: 'GEO',color: '#FB8500',},{name: 'História',init: 'HST',color: '#964C2A',},{name: 'Química',init: 'QUI',color: '#00A3FF',},{name: 'Física',init: 'FIS',color: '#00FFD1',},{name: 'Filosofia',init: 'FIL',color: '#808080',},{name: 'Ingês',init: 'ING',color: '#EC4CC9',},{name: 'Educação Física',init: 'EDF',color: '#6100FF'}]))
        }

        setSubjects(JSON.parse(subj))
    }

    async function setNewSubject({name, init, color}){
        setSubjects(oldSubject => [...oldSubject, {name, init, color}])
        await AsyncStorage.setItem('__subjects', JSON.stringify(subjects))
    }

    return (
        <SubjectContext.Provider value={{subjects, setNewSubject}}>
            {children}
        </SubjectContext.Provider>
    );
}