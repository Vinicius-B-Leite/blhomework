import React, { useCallback, useContext, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Divisor from '../../components/Divisor'
import { ChatContext } from '../../contexts/chatContext';
import { useFocusEffect } from '@react-navigation/native';
import ChatItem from '../../components/ChatItem';
import * as S from './styles'
import { useTheme } from 'styled-components';
import Skeleton from '../../components/Skeleton';


export default function Chat({ navigation }) {

    const { getChats, chats, loading } = useContext(ChatContext)
    const theme = useTheme()
    const [chatsFiltered, setChatsFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useFocusEffect(
        useCallback(() => {
            getChats()
        }, [])
    )

    function handleFilter(txt) {
        setSearchInput(txt)
        setChatsFiltered(() => chats.filter(value => value.name.includes(txt)))
        console.log(chatsFiltered)
    }

    return (
        <S.Container  >
            <S.Header onPress={() => navigation.goBack()}>
                <S.HeaderTitle >{'< '} Conversas</S.HeaderTitle>
            </S.Header>

            <Divisor />

            <S.Main >

                <S.InputContainer  >
                    <Feather name='search' size={theme.icons.sm} color={theme.colors.text} />
                    <S.Inp
                        value={searchInput}
                        onChangeText={handleFilter}
                        placeholder='Procurar chat'
                    />
                </S.InputContainer>

                {
                    loading ?
                        <View style={{ marginTop: '5%' }}>
                            <Skeleton w='100%' h={Dimensions.get('screen').height / 14} bg={theme.colors.blackBackgroundColor} />
                            <Skeleton w='100%' h={Dimensions.get('screen').height / 14} bg={theme.colors.blackBackgroundColor} />
                            <Skeleton w='100%' h={Dimensions.get('screen').height / 14} bg={theme.colors.blackBackgroundColor} />
                            <Skeleton w='100%' h={Dimensions.get('screen').height / 14} bg={theme.colors.blackBackgroundColor} />
                        </View>
                        :
                        chats.length > 0 ?
                            <FlatList
                                style={{ marginTop: '5%' }}
                                data={searchInput.length > 0 ? chatsFiltered : chats}
                                renderItem={({ item }) => <ChatItem item={item} />}
                            /> :
                            <S.NoChats>Primeiro entre em uma sala para ter acesso aos chats</S.NoChats>
                }
            </S.Main>
        </S.Container>
    );
}