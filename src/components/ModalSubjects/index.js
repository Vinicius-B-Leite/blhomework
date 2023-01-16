import React, { useContext, useMemo, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components';
import { SubjectContext } from '../../contexts/subjectContext';
import ModalCreateSubject from '../ModalCreateSubject';
import SubjectItem from '../SubjectItem';
import * as S from './styles'


export default function ModalSubjects({ visible, onClose }) {
    const theme = useTheme()
    const [search, setSearch] = useState()
    const [modalCreateSubjectVisible, setModalCreateSubjectVisible] = useState(false)
    const [filteredList, setFilteredList] = useState()
    const { subjects } = useContext(SubjectContext)

    useMemo(() => {
        const mySubjectsFiltered = subjects?.mySubjects?.filter(sub => sub?.name?.toLowerCase().includes(search?.toLowerCase()))
        const comunsSubjectFiltered = subjects?.comuns?.filter(sub => sub?.name?.toLowerCase().includes(search?.toLowerCase()))

        let filteredArray = {}

        if (comunsSubjectFiltered) filteredArray.comuns = [...comunsSubjectFiltered]
        if (mySubjectsFiltered) filteredArray.mySubjects = [...mySubjectsFiltered]

        setFilteredList(filteredArray)

    }, [search])

    return (
        <Modal animationType='slide' visible={visible} onRequestClose={onClose} >
            <S.Container >
                <S.Header >
                    <S.IconsGoback onPress={onClose}>
                        <Ionicons name='chevron-back' size={theme.icons.md} color={theme.colors.text} />
                    </S.IconsGoback>
                    <S.Search >
                        <S.Input
                            value={search}
                            onChangeText={setSearch}
                            placeholder='Pesquisar'
                            placeholderTextColor={theme.colors.grey}
                            textAlign='right'
                        />
                        <AntDesign name='search1' size={theme.icons.sm} color={theme.colors.text} />
                    </S.Search>
                </S.Header>

                <View style={{ padding: '5%' }}>
                    <S.Text>Minhas disciplinas</S.Text>
                    <S.CreateSubject onPress={() => setModalCreateSubjectVisible(true)}>
                        <S.CreateSubjectText>Criar disciplina  {'->'}</S.CreateSubjectText>
                    </S.CreateSubject>
                    <FlatList
                        style={{ maxHeight: '30%' }}
                        showsVerticalScrollIndicator={false}
                        data={search?.length > 0 ? filteredList.mySubjects : subjects?.mySubjects}
                        renderItem={({ item }) => <SubjectItem item={item} onClose={onClose} />}
                    />
                </View>

                <S.Text ml='5%'>Disciplinas comuns</S.Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: '5%' }}
                    data={search?.length > 0 ? filteredList.comuns : subjects?.comuns}
                    renderItem={({ item }) => <SubjectItem item={item} onClose={onClose} />}
                />
            </S.Container>

            <ModalCreateSubject visible={modalCreateSubjectVisible} onRequestClose={() => setModalCreateSubjectVisible(false)} />
        </Modal>
    );
}
