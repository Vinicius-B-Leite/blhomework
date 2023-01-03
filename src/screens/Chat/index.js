import React, { useCallback, useContext } from 'react';
import { FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Divisor from '../../components/Divisor'
import { ChatContext } from '../../contexts/chatContext';
import { useFocusEffect } from '@react-navigation/native';
import ChatItem from '../../components/ChatItem';
import * as S from './styles'



export default function Chat({ navigation }) {

    const { getChats, chats } = useContext(ChatContext)

    useFocusEffect(
        useCallback(() => {
            getChats()
        }, [])
    )

    return (
        <S.Container  >
            <S.Header onPress={() => navigation.goBack()}>
                <S.HeaderTitle >{'< '} Conversas</S.HeaderTitle>
            </S.Header>

            <Divisor />

            <S.Main >

                <S.InputContainer  >
                    <Feather name='search'  />
                    <S.Inp
                        placeholder='Procurar chat'
                    />
                </S.InputContainer>

                <FlatList
                    style={{marginTop: '5%' }}
                    data={chats}
                    renderItem={({ item }) => <ChatItem item={item} />}
                />
            </S.Main>
        </S.Container>
    );
}