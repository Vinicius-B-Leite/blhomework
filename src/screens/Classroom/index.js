import React, { useContext, useReducer } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/authContext';
import { theme } from '../../theme';
import { styles } from './styles';
import FloatButton from '../../components/FloatButton'


export default function Classroom({ route }) {

    const { user } = useContext(AuthContext)
    const { name, owner } = route.params.classroomData


    return (
        <SafeAreaView style={styles.container}>
            <Header goBackButton={true} />

            <View style={styles.main}>
                <Text style={styles.task}>Tarefas</Text>
                <Text style={styles.classroomName}>{name}</Text>
            </View>

            {owner === user.uid && <FloatButton />}
        </SafeAreaView>
    );
}
