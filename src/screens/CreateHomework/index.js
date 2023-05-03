import React, { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Alert, Dimensions, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Divisor from '../../components/Divisor'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BSModalUploadFiles from '../../components/BSModalUploadFiles'
import FilesItem from '../../components/FilesItem';
import ModalSubjects from '../../components/ModalSubjects';
import { HomeworkContext } from '../../contexts/homeworkContext';
import Calendar from '../../components/Calendar';
import * as S from './styles'
import { useTheme } from 'styled-components';
import firestore from '@react-native-firebase/firestore'





export default function CreateHomework({ navigation, route }) {
    console.log("🚀 ~ file: index.js:19 ~ CreateHomework ~ route:", route)
    const theme = useTheme()
    const { subjectSelected, dateSelected, filesOnUploading, createHomework, setSubjectSelected, setDateSelected } = useContext(HomeworkContext)
    const stack = navigation.getParent()
    const tabBar = stack.getParent()

    const [title, setTitle] = useState(route?.params?.task?.title || '')
    const [description, setDescription] = useState(route?.params?.task?.description || '')

    const [modalSubjectsVisible, setModalSubjectsVisible] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)

    const sheetRef = useRef(null);
    const [sheetPositon, setSheetPosition] = useState(-1) //-1: close; 0: min position; 1 max position


    function openBottomSheet() {
        setSheetPosition(0)
        sheetRef.current.collapse()
    }

    function closeBottomSheet() {
        sheetRef.current.close()
        setSheetPosition(-1)
    }
    useLayoutEffect(() => {
        if (route.params?.task) {
            setSubjectSelected(route.params?.task.subject)
            setDateSelected(route.params?.task.deadline.toDate())
        }
        tabBar.setOptions({ tabBarStyle: { display: 'none' } })
    }, [])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            Keyboard.dismiss()

            tabBar.setOptions({ tabBarStyle: { display: 'flex', backgroundColor: theme.colors.blackBackgroundColor, borderTopWidth: 0 } })
        })

    }, [])

    function clearInputes() {
        setDescription('')
        setTitle('')
    }

    const handleUpdateTask = async () => {
        if (route?.params?.task) {
            
            const { task } = route.params
            await firestore().collection('classroom').doc(task.classroomID).collection('homeworks').doc(task.id).update({
                title,
                description,
                subject: subjectSelected,
                deadline: dateSelected
            })
            navigation.goBack()
        }
    }

    return (
        <KeyboardAvoidingView enabled={false} behavior='height' style={{ flex: 1, backgroundColor: 'green' }}>
            <S.Container >
                <S.Header >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <S.BtnGoBack > {'<'}   Criar Tarefa</S.BtnGoBack>
                    </TouchableOpacity>

                    <S.CompleteButton onPress={() => route.params?.task ? handleUpdateTask() : createHomework({ title, description, classroomID: route.params.id, callback: clearInputes })}>
                        <S.BtnPost>{route.params?.task ? 'editar' : 'concluir'}</S.BtnPost>
                    </S.CompleteButton>
                </S.Header>

                <Divisor />

                <S.Main>

                    <S.SelectSubject onPress={() => setModalSubjectsVisible(true)}>
                        <S.InactiveOrActiveText active={!!subjectSelected} color={subjectSelected?.color}>{subjectSelected ? subjectSelected.name : 'Disciplina'}</S.InactiveOrActiveText>
                        <AntDesign name='down' size={theme.icons.sm} color={theme.colors.text} />
                    </S.SelectSubject>

                    <S.Inp
                        placeholderTextColor={theme.colors.grey}
                        placeholder='Título'
                        value={title}
                        onChangeText={setTitle}
                    />

                    <KeyboardAvoidingView enabled={true} behavior='height' style={{ height: Dimensions.get('screen').height / 2 }} keyboardVerticalOffset={100}>


                        <S.Inp
                            placeholderTextColor={theme.colors.grey}
                            textAlignVertical='top'
                            multiline
                            placeholder='Descrição'
                            value={description}
                            onChangeText={setDescription}
                            height='100%'
                        />
                    </KeyboardAvoidingView>

                    <S.UploadAndDateContainer>
                        <View>
                            <S.UploadIcon onPress={openBottomSheet}>
                                <AntDesign name='clouduploado' size={theme.icons.md} color={theme.colors.text} style={{ marginRight: '2%' }} />
                                <Text style={{ color: theme.colors.text }}>Material de apoio</Text>
                            </S.UploadIcon>
                        </View>

                        <S.CalendarContainer onPress={() => setCalendarOpen(true)} >
                            <AntDesign name='calendar' size={theme.icons.sm} color={theme.colors.text} style={{ marginRight: '3%' }} />
                            <Text style={{ color: theme.colors.text }}>{dateSelected.toLocaleDateString({ year: "numeric", month: "2-digit", day: "2-digit", })}</Text>
                        </S.CalendarContainer>
                    </S.UploadAndDateContainer>

                </S.Main>



            </S.Container >


            <ModalSubjects visible={modalSubjectsVisible} onClose={() => setModalSubjectsVisible(false)} />

            {sheetPositon > -1 && <S.CloseBottomSheet onPress={closeBottomSheet} />}


            <S.ModalBottomSheet
                index={-1}
                ref={sheetRef}
                enableOverDrag={true}
                enableHandlePanningGesture={true}
                enableContentPanningGesture={true}
                enablePanDownToClose={true}
                snapPoints={["60%", "100%"]}
                onChange={(index) => setSheetPosition(index)}
            >
                <S.FilesList
                    data={filesOnUploading}
                    ListHeaderComponent={() => <BSModalUploadFiles id={route.params.id} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => <FilesItem item={item} porcentage={item.porcentage} index={index} />}
                />
            </S.ModalBottomSheet>



            <Calendar open={calendarOpen} setOpen={setCalendarOpen} />
        </KeyboardAvoidingView>
    );
}