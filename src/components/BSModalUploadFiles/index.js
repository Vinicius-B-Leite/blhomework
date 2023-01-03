import React, { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { pickDocument } from '../../utils/pickDocument'
import { HomeworkContext } from '../../contexts/homeworkContext';
import * as S from './styles'
import { useTheme } from 'styled-components';




export default function BSModalUploadFiles({ id: classroomID }) {
    const { sendToStorage } = useContext(HomeworkContext)
    const theme = useTheme()

    async function handlePickDocumentd() {
        pickDocument({
            type: ['image/*', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
            multiSelection: true,
            onSucess: (data) => sendToStorage(classroomID, data)
        })
    }


    return (
        <S.Container  >
            <S.Alert >Suportamos somente <S.ImageAlert >imagens</S.ImageAlert> e <S.TextAlert >textos</S.TextAlert>
            </S.Alert>

            <S.UploadContainer onPress={handlePickDocumentd}>
                <AntDesign name='clouduploado' size={theme.icons.xlg} color={theme.colors.contrast} />
                <S.UploadText >Selecione um arquivo</S.UploadText >
            </S.UploadContainer>

        </S.Container>
    );
}
