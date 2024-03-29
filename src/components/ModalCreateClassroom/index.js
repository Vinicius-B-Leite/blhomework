import React, { useContext, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { ActivityIndicator, Image, Modal, Share, TouchableOpacity } from 'react-native';
import { ClassroomContext } from '../../contexts/classroomContext';
import Clipboard from '@react-native-clipboard/clipboard';
import { pickDocument } from '../../utils/pickDocument';
import Toast from '../Toast'
import * as S from './styles'
import { useTheme } from 'styled-components';




export default function ModalCreateClassroom({ modalVisible, onClose }) {
    const { createClassRoom, classroomID, loading } = useContext(ClassroomContext)
    const theme = useTheme()
    const [classroomName, setClassroomName] = useState('')
    const [classRoomPhoto, setClassRoomPhoto] = useState('')

    const [toastSettings, setToastSettings] = useState({ visible: false, text: '', bg: '', duration: 500 })

    function handleCreateRoom() {
        if (classRoomPhoto === '' || classroomName === '') {
            setToastSettings({ visible: true, text: 'Preencha todos os campos', bg: theme.colors.red, duration: 1000 })
            return
        }
        createClassRoom({
            photo: classRoomPhoto[0].fileCopyUri || 'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png',
            name: classroomName,
            callback: async (classroomKey) => {
                setToastSettings({ visible: true, text: 'Sala criada', bg: theme.colors.green, duration: 500 })
                await Share.share({
                    message: `Entre em minha sala usando o código ${classroomKey}`, 
                    title: `Entre em minha sala usando o código ${classroomKey}`,
                    url: 'https://www.youtube.com'})
            }
        })

    }

    return (
        <Modal animationType='slide' transparent visible={modalVisible} onRequestClose={onClose}>

            <Toast
                bg={toastSettings.bg}
                visible={toastSettings.visible}
                text={toastSettings.text}
                onAnimatedFinished={() => setToastSettings({ visible: false, text: '', bg: '', duration: 500 })}
                duration={toastSettings.duration} />

            <S.Container >
                <S.Main>
                    <S.PickDocument onPress={() => pickDocument({ type: 'image/*', setState: setClassRoomPhoto })}>
                        {
                            classRoomPhoto[0] ?
                                (
                                    <Image
                                        source={{ uri: classRoomPhoto[0].fileCopyUri }}
                                        style={{ width: '100%', height: '100%', borderRadius: theme.borderRadius.full }} />
                                )
                                :
                                (
                                    <Ionicons name='add' color={theme.colors.text} size={theme.icons.lg} />
                                )
                        }
                    </S.PickDocument>

                    <S.Inp
                        value={classroomName}
                        onChangeText={setClassroomName}
                        placeholder='Digite o nome da sala'
                        placeholderTextColor={theme.colors.grey}
                    />

                    <S.CodeContainer>

                        <S.Code classroomID={classroomID}> {classroomID ? classroomID : 'O código irá aparecer aqui'}</S.Code>

                        <TouchableOpacity onPress={() => Clipboard.setString(classroomID)}>
                            <Feather
                                name='clipboard'
                                color={{ color: classroomID ? theme.colors.white : theme.colors.grey }}
                                size={theme.icons.sm} />
                        </TouchableOpacity>
                    </S.CodeContainer>


                    <S.CreateClassroomButton onPress={handleCreateRoom}>

                        <S.CreateClassroomButtonText >{
                            loading ?
                                <ActivityIndicator size={theme.icons.sm} color={theme.colors.text} /> :
                                'Criar'}
                        </S.CreateClassroomButtonText>

                    </S.CreateClassroomButton>
                </S.Main>
                <S.CloseBtn onPress={onClose} />
            </S.Container>
        </Modal >
    )
}