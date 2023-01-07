import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import Divisor from '../Divisor'
import { useTheme } from 'styled-components';
import * as S from './styles'


export default function Header({ goBackButton }) {
    const theme = useTheme()
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()
    return (
        <>
            <S.Container>
                <S.Btn >
                    <S.Avatar source={{ uri: user.photoURL }} />
                    <S.UserName numberOfLines={1} >{user.displayName}</S.UserName>
                </S.Btn>

                {
                    goBackButton && (
                        <S.GoBackButton onPress={() => navigation.goBack()} >
                            <MaterialIcons name='logout' size={theme.icons.sm} color={theme.colors.text} />
                        </S.GoBackButton>
                    )
                }
            </S.Container>
            <Divisor />
        </>
    )
}
