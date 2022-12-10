import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import ClassRoomItem from '../../components/ClassRoomItem';
import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import ModalCreateClassroom from '../../components/ModalCreateClassroom';
import ModalEnterClassroom from '../../components/ModalEnterClassroom';
import { ClassroomContext } from '../../contexts/classroomContext';
import { styles } from './styles';

export default function Home() {

    const { getClassroom, classrooms } = useContext(ClassroomContext)

    const [modalEnterClassroomVisible, setModalEnterClassroomVisible] = useState(false)
    const [modalCreateClassroomVisible, setModalCreateClassroomVisible] = useState(false)

    useEffect(() => {
        getClassroom()
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <Header />

            <View style={styles.main}>

                <TouchableOpacity style={{ position: 'relative' }} onPress={() => setModalEnterClassroomVisible(true)}>
                    <Text style={styles.enterClassroom}>Entre em uma sala com um código</Text>
                    <Text style={styles.enterClassroomIcon}>+</Text>
                </TouchableOpacity>


                <FlatList
                    data={classrooms}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ClassRoomItem item={item} />}
                    contentContainerStyle={{ paddingTop: '5%' }}
                />
            </View>
            <FloatButton callback={() => setModalCreateClassroomVisible(true)} />
            <ModalEnterClassroom modalVisible={modalEnterClassroomVisible} onClose={() => setModalEnterClassroomVisible(false)} />
            <ModalCreateClassroom modalVisible={modalCreateClassroomVisible} onClose={() => setModalCreateClassroomVisible(false)} />
        </SafeAreaView>
    );
}