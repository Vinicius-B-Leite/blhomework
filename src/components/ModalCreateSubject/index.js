import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, StyleSheet, Text, View } from 'react-native';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider, } from 'reanimated-color-picker';
import * as S from './styles'
import Divisor from '../Divisor'
import { useTheme } from 'styled-components';



export default function ModalCreateSubject({ visible, onRequestClose }) {

    const [color, setColor] = useState('#f3fd40')
    const [inputColor, setInputColor] = useState('#f3fd40')
    const [initials, setInitials] = useState('')
    const [subjectName, setSubjectName] = useState('')
    const theme = useTheme()

    function onSelectColor({ hex }) {
        setColor(hex)
        setInputColor(hex)
    };

    function changeColor() {
        var hexaRegex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i
        var rgbRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/


        if (hexaRegex.test(inputColor) || rgbRegex.test(inputColor.toLowerCase())) {
            setColor(inputColor)
        }
    }

    return (
        <Modal visible={visible} onRequestClose={onRequestClose} animationType='fade'>
            <KeyboardAvoidingView style={{flex: 1}} behavior='height' enabled={false}>
                <S.Container>
                    <S.Header>
                        <S.CloseModal onPress={onRequestClose}>
                            <S.Title>{'<'}   Criar disciplina</S.Title>
                        </S.CloseModal>
                    </S.Header>

                    <Divisor />


                    <S.ColorContainer
                        value={color}
                        sliderThickness={25}
                        thumbSize={20}

                        onComplete={onSelectColor}
                        >

                        <S.PickerSlide  />

                        <S.Row>
                            <S.PreviewColor hideInitialColor hideText />

                            <View style={{ flex: 1 }}>
                                <HueSlider thumbShape="doubleTriangle" thumbColor={theme.colors.backgrounbColor} />
                                <S.InputColor 
                                    placeholder='Informe uma cor' 
                                    placeholderTextColor={theme.colors.grey}
                                    value={inputColor} onChangeText={setInputColor} 
                                    onEndEditing={changeColor} />
                            </View>
                        </S.Row>

                    </S.ColorContainer>

                    <S.Form>
                        <S.InitInput
                            placeholder='MAT'
                            color={color}
                            value={initials}
                            onChangeText={setInitials}
                            maxLength={4}
                            placeholderTextColor={theme.colors.grey}
                        />
                        <S.SubjectNameInput
                            placeholder='Matemática'
                            value={subjectName}
                            onChangeText={setSubjectName}
                            placeholderTextColor={theme.colors.grey}
                        />
                    </S.Form>

                    <S.PreviewText >Pré-visualização</S.PreviewText>
                    <S.Card>
                        <S.Initial color={color}>{initials || 'MAT'}</S.Initial>
                        <View>
                            <S.SubjectName>{subjectName || 'Matemática'}</S.SubjectName>
                            <S.Date style>28/03</S.Date>
                        </View>
                    </S.Card>

                    <S.CreateButton>
                        <S.CreateButtonText>Criar</S.CreateButtonText>
                    </S.CreateButton>
                </S.Container>
            </KeyboardAvoidingView>
        </Modal>
    );
}
