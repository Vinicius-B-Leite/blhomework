import React, { useContext, useMemo, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import * as S from './styles'
import { AuthContext } from '../../contexts/authContext'
import Toast from '../../components/Toast';
import { useTheme } from 'styled-components';


export default function Login() {
    const theme = useTheme()
    const [type, setType] = useState('login')
    const { login, signUp, error, setError } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const [toastVisible, setToastVisible] = useState(false)

    useMemo(() => {
        setToastVisible(Object.values(error).length > 0)
    }, [error])
    return (
        <S.Container >
            <Toast text={
                error?.email?.message ||
                error?.password?.message ||
                error?.userName?.message
            }
                bg={theme.colors.red}
                visible={toastVisible}
                onAnimatedFinished={() => setToastVisible(false)}
            />
            <S.TitleContainer >
                <S.Title color={theme.colors.contrast}>BL</S.Title>
                <S.Title >Homeworks</S.Title>
            </S.TitleContainer>

            {
                type === 'singup' && (
                    <S.InputContainer error={error?.userName}>
                        <FontAwesome5 name='user' size={theme.icons.sm} colors={theme.colors.text} />
                        <S.Input
                            value={name}
                            onChangeText={setName}
                            placeholder='Nome'
                            placeholderTextColor={theme.colors.grey}
                        />
                    </S.InputContainer>
                )
            }

            <S.InputContainer error={error?.email}>
                <MaterialCommunityIcons name='email' size={theme.icons.sm} colors={theme.colors.text} />
                <S.Input
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    placeholderTextColor={theme.colors.grey}
                    autoCapitalize={false}
                    keyboardType='email-address'
                />
            </S.InputContainer>

            <S.InputContainer error={error.password}>
                <FontAwesome name='lock' size={theme.icons.sm} colors={theme.colors.text} />
                <S.Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Senha'
                    placeholderTextColor={theme.colors.grey}
                    secureTextEntry={!showPassword}
                />
                <S.BtnShowPassword onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <Entypo name='eye' size={theme.icons.sm} colors={theme.colors.text} />
                    ) :
                        (
                            <Entypo name='eye-with-line' size={theme.icons.sm} colors={theme.colors.text} />
                        )}


                </S.BtnShowPassword>
            </S.InputContainer>


            <S.Btn onPress={() => {
                if (type === 'login') {
                    login(email, password)
                }
                else {
                    signUp(email, password, name)
                }
            }}>

                <S.TextBtn>{type === 'login' ? 'Entrar' : 'Criar conta'}</S.TextBtn>
            </S.Btn>

            <TouchableOpacity onPress={() => {
                setError({})
                setType(type === 'login' ? 'singup' : 'login')
            }}>
                <Text>{type === 'login' ? 'Não possui uma conta? Crie já!' : 'Já possui uma conta? Faça login!'}</Text>
            </TouchableOpacity>

        </S.Container>
    );
}