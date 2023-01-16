import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { HomeworkContext } from '../../contexts/homeworkContext';
import { SubjectContext } from '../../contexts/subjectContext';
import * as S from './styles'



export default function SubjectItem({ item, onClose }) {
    const { setSubjectSelected } = useContext(HomeworkContext)
    const { deleteSubject } = useContext(SubjectContext)

    function handleSelectItem() {
        setSubjectSelected(item)
        onClose()
    }

    function handleDeleteSubject() {
        Alert.alert(
            'Deletar disciplina',
            'Você deseja deletar a disciplina ' + item.name + '?',
            [
                {
                    text: 'Sim',
                    onPress: () => deleteSubject(item)
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }
    return (
        <S.Container onPress={handleSelectItem} onLongPress={handleDeleteSubject}>
            <S.SubjectName color={item.color}>{item.name}</S.SubjectName>
        </S.Container>
    );
}
