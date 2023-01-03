import React, { useContext } from 'react';
import { HomeworkContext } from '../../contexts/homeworkContext';
import * as S from './styles'



export default function SubjectItem({ item, onClose }) {
    const { setSubjectSelected } = useContext(HomeworkContext)

    function handleSelectItem() {
        setSubjectSelected(item)
        onClose()
    }

    return (
        <S.Container onPress={handleSelectItem}>
            <S.SubjectName color={item.color}>{item.name}</S.SubjectName>
        </S.Container>
    );
}
