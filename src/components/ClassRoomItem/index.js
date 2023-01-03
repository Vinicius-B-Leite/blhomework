import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import * as S from './styles.js'
import { Alert } from 'react-native';
import { HomeworkContext } from '../../contexts/homeworkContext'



export default function ClassRoomItem({ item }) {
    const navigation = useNavigation()
    const { goOutClassroom } = useContext(HomeworkContext)


    function handleGoout() {
        Alert.alert(
            'Atenção',
            'Deseja sair da sala ' + item.name + '?',
            [
                {
                    text: 'Confirmar',
                    onPress: () => goOutClassroom({ classroomKey: item.id }),
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
            ]

        )
    }

    return (
        <S.Container
            onPress={() => navigation.navigate('ClassroomStack', { screen: 'Classroom', params: { classroomData: item } })}
            onLongPress={handleGoout}
        >

            <S.Avatar source={{ uri: item.avatarURL }} />
            <S.ClassroomName numberOfLines={1}>{item.name}</S.ClassroomName>
        </S.Container>
    )
}
