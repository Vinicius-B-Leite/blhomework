import React, { useContext, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ClassRoomItem from '../../components/ClassRoomItem';
import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import ModalCreateClassroom from '../../components/ModalCreateClassroom';
import ModalEnterClassroom from '../../components/ModalEnterClassroom';
import { ClassroomContext } from '../../contexts/classroomContext';
import { NotifcationContext } from '../../contexts/notificationContext';
import Skeleton from '../../components/Skeleton'
import * as S from './styles'
import { useTheme } from 'styled-components/native';
import axios from 'axios';

export default function Home() {
    const theme = useTheme()
    const { getClassroom, classrooms, loading } = useContext(ClassroomContext)
    const { getToken } = useContext(NotifcationContext)
    const [modalEnterClassroomVisible, setModalEnterClassroomVisible] = useState(false)
    const [modalCreateClassroomVisible, setModalCreateClassroomVisible] = useState(false)


    useEffect(() => {
        getToken()

        getClassroom()
    }, [])

    return (
        <S.Container>

            <Header />

            <S.Main >

                <TouchableOpacity style={{ position: 'relative' }} onPress={() => setModalEnterClassroomVisible(true)}>
                    <S.EnterClassroom>Entre em uma sala com um código</S.EnterClassroom>
                    <S.EnterClassroomIcon>{'+'}</S.EnterClassroomIcon>
                </TouchableOpacity>

                {
                    loading && classrooms?.length === 0 && (
                        <>
                            <Skeleton w='100%' h='12%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                            <Skeleton w='100%' h='12%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                            <Skeleton w='100%' h='12%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                            <Skeleton w='100%' h='12%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                        </>
                    )
                }


                {
                    classrooms?.length > 0 && (
                        <FlatList
                            data={classrooms}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <ClassRoomItem item={item} />}
                            contentContainerStyle={{ paddingTop: '5%' }}
                        />
                    )
                }
            </S.Main>
            <FloatButton callback={() => setModalCreateClassroomVisible(true)} />
            <ModalEnterClassroom modalVisible={modalEnterClassroomVisible} onClose={() => setModalEnterClassroomVisible(false)} />
            <ModalCreateClassroom modalVisible={modalCreateClassroomVisible} onClose={() => setModalCreateClassroomVisible(false)} />
        </S.Container>
    )
}
