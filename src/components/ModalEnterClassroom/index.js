import React, { useContext, useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useTheme } from 'styled-components';
import { ClassroomContext } from '../../contexts/classroomContext';
import * as S from './styles'





export default function ModalEnterClassroom({ modalVisible, onClose }) {
    const theme = useTheme()
    const { enterInClassroom, loading } = useContext(ClassroomContext)
    const [classroomCode, setClassroomCode] = useState()

    return (
        <Modal animationType='slide' transparent visible={modalVisible} onRequestClose={onClose}>


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
                    <S.Btn onPress={() => enterInClassroom(classroomCode, onClose)}>
                        <S.TextBtn>
                            {loading ? <ActivityIndicator color={theme.colors.white} size={theme.icons.sm} /> : 'Entrar'}
                        </S.TextBtn>
                    </S.Btn>
                </S.Main>
            </S.Container>
        </Modal>
    )
}