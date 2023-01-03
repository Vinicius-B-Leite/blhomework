import React, { useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { AuthContext } from '../../contexts/authContext'
import * as S from './styles'


export default function Message({ item }) {
    const { user } = useContext(AuthContext)
    const theme = useTheme()
    const [isMyMessage, setIsMyMessage] = useState(true)

    useEffect(() => {
        setIsMyMessage(item.owner == user.uid)
    }, [item])

    return (
        <S.MessageContainer isMyMessage={isMyMessage}>

            {
                !isMyMessage && <S.UserPhoto source={{ uri: item?.userPhotoURL }} />
            }

            <S.Main >

                {!isMyMessage && <S.UserName >{item?.userName}</S.UserName>}

                <S.Gradient
                    colors={
                        isMyMessage ?
                            [theme.colors.backgrounbColor, theme.colors.backgrounbColor]
                            :
                            ['#189BB6', theme.colors.contrast]}
                    isMyMessage={isMyMessage}
                    start={{ x: 0.3, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <S.Message >{item?.message}</S.Message>
                </S.Gradient>
            </S.Main>

            {
                item?.imageURL &&
                <S.MessageImage
                    width={Dimensions.get('screen').width / 2}
                    source={{ uri: item?.imageURL }}
                    maxHeight={Dimensions.get('screen').height / 2.5}
                    resizeMode='contain'
                />
            }
        </S.MessageContainer >

    );
}
