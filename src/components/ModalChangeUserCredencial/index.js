import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { useTheme } from 'styled-components';
import * as S from './styles'



export default function ModalChangeUserCredencial({ title, placeholder, callback, onClose, modalVisible }) {
    const theme = useTheme()
    const [value, setValue] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Modal animationType='slide' transparent visible={modalVisible} onRequestClose={onClose}>


            <S.Container>

                <S.Close onPress={() => onClose()}>
                    <View />
                </S.Close>

                <S.Main >
                    <S.Title >{title}</S.Title>
                    <S.Inp
                        value={value}
                        onChangeText={setValue}
                        placeholder={placeholder}
                        placeholderTextColor={theme.colors.grey}
                    />
                    <S.Inp
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Senha'
                        placeholderTextColor={theme.colors.grey}
                        secureTextEntry={true}
                    />
                    <S.Btn onPress={() => callback(value).then(onClose)}>
                        <S.TextBtn >Salvar</S.TextBtn>
                    </S.Btn>
                </S.Main>
            </S.Container>
        </Modal>
    );
}
