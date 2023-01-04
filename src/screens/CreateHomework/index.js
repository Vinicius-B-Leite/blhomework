import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Divisor from '../../components/Divisor'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BSModalUploadFiles from '../../components/BSModalUploadFiles'
import FilesItem from '../../components/FilesItem';
import ModalSubjects from '../../components/ModalSubjects';
import { HomeworkContext } from '../../contexts/homeworkContext';
import Calendar from '../../components/Calendar';
import * as S from './styles'
import { useTheme } from 'styled-components';






export default function CreateHomework({ navigation, route }) {
    const theme = useTheme()
    const modalizeRef = useRef(null)
    const { subjectSelected, dateSelected, filesOnUploading, createHomework } = useContext(HomeworkContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [modalSubjectsVisible, setModalSubjectsVisible] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)

    const stack = navigation.getParent()
    const tabBar = stack.getParent()

    function openModalize() {
        modalizeRef?.current?.open()
    }

    useLayoutEffect(() => {
        tabBar.setOptions({ tabBarStyle: { display: 'none' } })

    }, [])

    function clearInputes() {
        setDescription('')
        setTitle('')
    }

    function handleGoBack() {
        tabBar.setOptions({ tabBarStyle: { display: 'flex', backgroundColor: theme.colors.blackBackgroundColor, borderTopWidth: 0 } })
        navigation.goBack()
    }

    return (
        <KeyboardAvoidingView enabled={false} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <S.Container >
                <S.Header >
                    <TouchableOpacity onPress={handleGoBack}>
                        <S.BtnGoBack > {'<'}   Criar Tarefa</S.BtnGoBack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => createHomework({ title, description, classroomID: route.params.id, callback: clearInputes })}>
                        <S.BtnPost>concluir</S.BtnPost>
                    </TouchableOpacity>
                </S.Header>

                <Divisor />

                <S.Main>
                    <S.SelectSubject onPress={() => setModalSubjectsVisible(true)}>
                        <S.InactiveOrActiveText active={!!subjectSelected} color={subjectSelected?.color}>{subjectSelected ? subjectSelected.name : 'Disciplina'}</S.InactiveOrActiveText>
                        <AntDesign name='down' size={theme.icons.sm} color={theme.colors.white} />
                    </S.SelectSubject>

                    <S.Inp
                        placeholderTextColor={theme.colors.grey}
                        placeholder='Título'
                        value={title}
                        onChangeText={setTitle}
                    />


                    <S.Inp
                        placeholderTextColor={theme.colors.grey}
                        textAlignVertical='top'
                        multiline
                        placeholder='Descrição'
                        value={description}
                        onChangeText={setDescription}
                        height='50%'
                    />

                    <S.UploadAndDateContainer>
                        <View>
                            <S.UploadIcon onPress={openModalize}>
                                <AntDesign name='clouduploado' size={theme.icons.md} color={theme.colors.white} style={{ marginRight: '2%' }} />
                                <Text>Material de apoio</Text>
                            </S.UploadIcon>
                        </View>

                        <S.CalendarContainer onPress={() => setCalendarOpen(true)} >
                            <AntDesign name='calendar' size={theme.icons.sm} color={theme.colors.white} style={{ marginRight: '3%' }} />
                            <Text>{dateSelected.getDate()}/{dateSelected.getMonth() + 1}</Text>
                        </S.CalendarContainer>
                    </S.UploadAndDateContainer>

                </S.Main>



            </S.Container>


            <ModalSubjects visible={modalSubjectsVisible} onClose={() => setModalSubjectsVisible(false)} />
            <S.Modal
                modalStyle={{
                    backgroundColor: theme.colors.backgrounbColor,
                    borderTopLeftRadius: theme.borderRadius.lg,
                    borderTopRightRadius:  theme.borderRadius.lg,
                    padding: '5%'
                }}
                ref={modalizeRef}
                snapPoint={Dimensions.get('screen').height / 1.5}
                HeaderComponent={() => <BSModalUploadFiles id={route.params.id} />}
                flatListProps={{
                    data: filesOnUploading,
                    showsVerticalScrollIndicator: false,
                    renderItem: ({ item, index }) => <FilesItem item={item} porcentage={item.porcentage} index={index} />,
                }}
            />

            <Calendar open={calendarOpen} setOpen={setCalendarOpen} />
        </KeyboardAvoidingView>
    );
}