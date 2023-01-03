import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ChatContext } from '../../contexts/chatContext';
import * as S from './styles'


export default function ChatItem({ item }) {
    const navigation = useNavigation()
    const [messagesUnread, setMessagesUnread] = useState(0)
    const { getNumberOfMessagesUnread } = useContext(ChatContext)

    useEffect(() => {
        getNumberOfMessagesUnread(item.id).then(numb => {
            setMessagesUnread(numb)
        })
    }, [item])

    return (
        <S.Container onPress={() => navigation.navigate('Chatroom', { data: item })}>
            <S.Avatar
                source={{ uri: item.avatarURL }}
            />
            <View style={{ marginLeft: '5%' }}>
                <S.ChatName >{item.name}</S.ChatName>
                {item.lastMessage && <S.LastMessage >{item?.lastMessage}</S.LastMessage>}
                {messagesUnread > 0 && <S.MessagesUnread>{messagesUnread}</S.MessagesUnread>}

            </View>
        </S.Container>
    );
}