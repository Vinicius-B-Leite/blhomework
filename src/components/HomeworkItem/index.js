import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ComponentSwipe from '../ComponentSwipe';
import { HomeworkContext } from '../../contexts/homeworkContext';
import { useTheme } from 'styled-components';
import * as S from './styles'


export default function HomeworkItem({ item }) {
    const theme = useTheme()
    const navigation = useNavigation()
    const { setHomeworkDoneStatus, homeworksDone } = useContext(HomeworkContext)
    const swipeRef = useRef()

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
            >
                <S.Initials color={item.subject.color}>{item.subject.init}</S.Initials>
                <View>
                    <S.Text >{item.title}</S.Text>
                    <S.Text >{item.deadline.toDate().getDate()}/{item.deadline.toDate().getMonth() + 1}</S.Text>
                </View>
            </S.Container>
        </Swipeable>
    );
}