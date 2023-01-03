import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { SectionList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Divisor from '../../components/Divisor'
import { ChatContext } from '../../contexts/chatContext';
import * as S from './styles'
import { useFocusEffect } from '@react-navigation/native';
import Message from '../../components/Message';
import { pickDocument } from '../../utils/pickDocument'
import { useTheme } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather'


export default function ChatRoom({ route, navigation }) {
    const theme = useTheme()
    const { avatarURL, name, id } = route.params.data
    const { getMessages, messages, sendMessage } = useContext(ChatContext)

    const [message, setMessage] = useState('')
    const [imageUri, setImageUri] = useState()

    const tabBar = navigation.getParent()

    useLayoutEffect(() => {
        tabBar.setOptions({ tabBarStyle: { display: 'none' } })
    }, [])

    useFocusEffect(
        useCallback(() => {
            getMessages(id)
        }, [])
    )


    function handleGoBack() {
        tabBar.setOptions({ tabBarStyle: { display: 'flex', backgroundColor: theme.colors.blackBackgroundColor, borderTopWidth: 0 } })
        navigation.goBack()
    }

    return (
        <S.Container>
            <S.Header onPress={handleGoBack}>
                <AntDesign name='arrowleft' size={theme.icons.sm} color={theme.colors.white} />
                <S.Avatar
                    source={{ uri: avatarURL }}
                />
                <S.Title >{name}</S.Title>
            </S.Header>

            <Divisor />


            <SectionList
                sections={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Message item={item} />}
                renderSectionFooter={({ section: { title } }) => (
                    <S.SectionTitle >{title}</S.SectionTitle>
                )}
                contentContainerStyle={{ padding: '5%' }}
                inverted
                showsVerticalScrollIndicator={false}
            />

            <S.InputArea >
                <S.Input
                    value={message}
                    onChangeText={setMessage}
                    
                    placeholder='Digite algo'
                    placeholderTextColor={theme.colors.grey}
                />

                <S.ButtonImage
                    
                    onPress={() => pickDocument({
                        setState: setImageUri,
                        type: 'image/*',
                        onSucess: (data) => sendMessage({ image: data[0], classroomId: id })
                    })}
                >
                    <Feather name='image' size={theme.icons.sm} color={theme.colors.white} />
                </S.ButtonImage>

                <S.ButtonSendMessage
                    
                    onPress={() => {
                        setMessage('')
                        sendMessage({ message: message, classroomId: id })
                    }}>
                    <S.SendIcon name='send' size={theme.icons.md} />
                </S.ButtonSendMessage>

            </S.InputArea>
        </S.Container>
    );
}