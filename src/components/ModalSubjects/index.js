import React, { useMemo, useState } from 'react';
import { FlatList, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'styled-components';
import SubjectItem from '../SubjectItem';
import * as S from './styles'

const subjects = [
    {
        name: 'Matemática',
        init: 'MAT',
        color: '#FF5151',
    },
    {
        name: 'Biologia',
        init: 'BIO',
        color: '#80FFE4',
    },
    {
        name: 'Língua portuguesa',
        init: 'LP',
        color: '#00A3FF',
    },
    {
        name: 'Geografia',
        init: 'GEO',
        color: '#FB8500',
    },
    {
        name: 'História',
        init: 'HST',
        color: '#964C2A',
    },
    {
        name: 'Química',
        init: 'QUI',
        color: '#00A3FF',
    },
    {
        name: 'Física',
        init: 'FIS',
        color: '#00FFD1',
    },
    {
        name: 'Filosofia',
        init: 'FIL',
        color: '#808080',
    },
    {
        name: 'Ingês',
        init: 'ING',
        color: '#EC4CC9',
    },
    {
        name: 'Educação Física',
        init: 'EDF',
        color: '#6100FF',
    },
]

export default function ModalSubjects({ visible, onClose }) {
    const theme = useTheme()
    const [search, setSearch] = useState()
    const [filteredList, setFilteredList] = useState([])

    useMemo(() => {
        setFilteredList(subjects.filter(sub => sub?.name?.toLowerCase().includes(search?.toLowerCase())))

    }, [search])

    return (
        <Modal animationType='slide' visible={visible} onRequestClose={onClose} >
            <S.Container >

                <S.Header >
                    <S.IconsGoback>
                        <Ionicons name='chevron-back' size={theme.icons.lg} color={theme.colors.white} />
                    </S.IconsGoback>
                    <S.Search >
                        <S.Input
                            value={search}
                            onChangeText={setSearch}
                            placeholder='Pesquisar'
                            placeholderTextColor={theme.colors.grey}
                            textAlign='right'
                        />
                        <AntDesign name='search1' size={theme.icons.sm} color={theme.colors.white} />
                    </S.Search>
                </S.Header>

                <FlatList
                    contentContainerStyle={{ paddingHorizontal: '5%' }}
                    data={search?.length > 0 ? filteredList : subjects}
                    renderItem={({ item }) => <SubjectItem item={item} onClose={onClose} />}
                />
            </S.Container>
        </Modal>
    );
}
