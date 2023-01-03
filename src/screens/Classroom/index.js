import React, { useCallback, useContext } from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/authContext';
import FloatButton from '../../components/FloatButton'
import HomeworkItem from '../../components/HomeworkItem';
import Skeleton from '../../components/Skeleton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { HomeworkContext } from '../../contexts/homeworkContext';
import { useTheme } from 'styled-components';
import * as S from './styles'

export default function Classroom({ route }) {

    const navigation = useNavigation()
    const theme = useTheme()
    const { user } = useContext(AuthContext)
    const { getHomeworks, homeworks, setHomeworks, loading } = useContext(HomeworkContext)
    const { name, owner, id } = route.params.classroomData

    useFocusEffect(
        useCallback(() => {
            getHomeworks(id)

            return () => setHomeworks()
        }, [])
    )


    return (
        <S.Container>
            <Header goBackButton={true} />

            <S.Main >
                <S.Task >Tarefas</S.Task>
                <S.ClassroomName>{name}</S.ClassroomName>
            </S.Main>

            {
                loading && (

                    <>
                        <Skeleton w='90%' h='10%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                        <Skeleton w='90%' h='10%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                        <Skeleton w='90%' h='10%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                        <Skeleton w='90%' h='10%' r={theme.borderRadius.sm} ph='5%' bg={theme.colors.blackBackgroundColor} />
                    </>
                )
            }

            {
                homeworks?.length > 0 ? (
                    <FlatList
                        contentContainerStyle={{ padding: '5%' }}
                        data={homeworks}
                        renderItem={({ item }) => <HomeworkItem item={item} />}
                    />
                ) :
                    !loading && (<S.NoHomeworks>Não há tarefas de casa</S.NoHomeworks>)
            }
            {owner === user.uid && <FloatButton callback={() => navigation.navigate('CreateHomework', { id })} />}



        </S.Container>
    );
}
