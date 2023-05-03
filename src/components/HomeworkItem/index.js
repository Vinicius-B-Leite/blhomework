import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { Alert, Dimensions, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ComponentSwipe from '../ComponentSwipe';
import { HomeworkContext } from '../../contexts/homeworkContext';
import { useTheme } from 'styled-components';
import * as S from './styles'
import firestore from '@react-native-firebase/firestore'
import Feather from 'react-native-vector-icons/Feather'

export default function HomeworkItem({ item }) {
    const theme = useTheme()
    const navigation = useNavigation()
    const { setHomeworkDoneStatus, homeworksDone, getHomeworks } = useContext(HomeworkContext)
    const swipeRef = useRef()

    const handleDeleteTask = async () => {
        if (item.isAdmin) {
            Alert.alert(
                'Excluir tarefa',
                'Deseja excluir a tarefa ' + item.title + '?',
                [
                    {
                        text: 'Sim',
                        onPress: async () => {
                            await firestore()
                                .collection('classroom')
                                .doc(item.classroomID)
                                .collection('homeworks')
                                .doc(item.id)
                                .delete()

                            await getHomeworks(item.classroomID)
                        }
                    },
                    {
                        text: 'Não',
                        style: 'cancel'
                    }
                ]
            )

        }
    }

    const handleEditTask = () => {
        if (item.isAdmin) {
            Alert.alert(
                'Editar tarefa',
                'Deseja Editar a tarefa ' + item.title + '?',
                [
                    {
                        text: 'Sim',
                        onPress: () => navigation.navigate('CreateHomework', { id: item.classroomID, task: item })
                    },
                    {
                        text: 'Não',
                        style: 'cancel'
                    }
                ]
            )

        }
    }
    return (
        <Swipeable
            ref={swipeRef}

            renderLeftActions={() => <ComponentSwipe iconName='checkcircle' iconColor={theme.colors.contrast} iconPosition='start' />}
            renderRightActions={() => <ComponentSwipe iconName='closecircle' iconColor={theme.colors.red} iconPosition='end' />}

            containerStyle={{ marginVertical: '3%' }}

            leftThreshold={Dimensions.get('screen').width / 3.5}

            onSwipeableOpen={async (direction) => {
                if (direction === 'left') {
                    await setHomeworkDoneStatus(item.id, item.classroomID, 'add')
                } else {
                    await setHomeworkDoneStatus(item.id, item.classroomID, 'remove')
                }
                swipeRef.current.close()
            }}

        >
            {
                homeworksDone.includes(item.id) && <S.DarkBackground />
            }
            <S.Container
                onPress={() => navigation.navigate('Homework', { data: item })}
                onLongPress={handleEditTask}
            >
                <S.Left>
                    <S.Initials color={item.subject.color}>{item.subject.init}</S.Initials>
                    <View>
                        <S.Text numberOfLines={1}>{item.title}</S.Text>
                        <S.Text >{item.deadline.toDate().getDate()}/{item.deadline.toDate().getMonth() + 1}</S.Text>
                    </View>
                </S.Left>

                {item.isAdmin &&
                    <TouchableOpacity onPress={handleDeleteTask}>
                        <Feather name='trash-2' color={theme.colors.red} size={theme.icons.sm} />
                    </TouchableOpacity>}
            </S.Container>
        </Swipeable>
    );
}