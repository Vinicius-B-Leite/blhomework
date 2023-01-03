import React, { useContext, useMemo, useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useTheme } from 'styled-components';
import { ClassroomContext } from '../../contexts/classroomContext';
import * as S from './styles'
import Toast from '../Toast'




export default function ModalEnterClassroom({ modalVisible, onClose }) {
    const theme = useTheme()
    const { enterInClassroom, loading, error } = useContext(ClassroomContext)
    const [classroomCode, setClassroomCode] = useState('')
    const [toastVisible, setToastVisible] = useState(false)
    const [toastMessage, setToastMessage] = useState('')


    function handleEnteClassroom() {
        if (classroomCode !== '') {
            enterInClassroom(
                classroomCode,
                () => {
                    setToastMessage('Entrou na sala')
                    onClose()
                },
                () => {
                    setToastVisible(true)
                    setToastMessage('Sala não encontrada')
                }
            )
        }
    }

    
    return (
        <Modal animationType='slide' transparent visible={modalVisible} onRequestClose={onClose}>
            <Toast
                bg={theme.colors.red}
                text={toastMessage}
                duration={1000}
                visible={toastVisible}
                onAnimatedFinished={() => setToastVisible(false)}
            />

            <S.Container>

                <S.Close onPress={() => onClose()} >
                    <View />
                </S.Close>

                <S.Main >
                    <S.Title >Entrar em uma sala</S.Title>
                    <S.Inp
                        value={classroomCode}
                        onChangeText={setClassroomCode}
                        placeholder='Digite o código da sala'
                        placeholderTextColor={theme.colors.grey}
                    />
                    <S.Btn onPress={handleEnteClassroom}>
                        <S.TextBtn>
                            {loading ? <ActivityIndicator color={theme.colors.white} size={theme.icons.sm} /> : 'Entrar'}
                        </S.TextBtn>
                    </S.Btn>
                </S.Main>
            </S.Container>
        </Modal>
    )
}