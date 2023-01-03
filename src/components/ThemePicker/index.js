import React, { useContext, useState } from 'react';
import { Modal } from 'react-native';
import * as S from './styles'
import { ThemeContext } from '../../contexts/themeContext';



export default function ThemePicker({ modalVisible, onClose }) {
    const { changeTheme } = useContext(ThemeContext)
    return (
        <Modal animationType='fade' transparent visible={modalVisible} onRequestClose={onClose}>
            <S.CloseBtn onPress={onClose} />
            <S.Container >

                <S.OptionsButton onPress={() => changeTheme('dark')}>
                    <S.ButtonText >Escuro</S.ButtonText>
                </S.OptionsButton>

                <S.OptionsButton onPress={() => changeTheme('light')}>
                    <S.ButtonText >Claro</S.ButtonText>
                </S.OptionsButton>

            </S.Container>

        </Modal>
    )
}