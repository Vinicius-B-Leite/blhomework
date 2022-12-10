import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

import { theme } from '../../theme';
import { styles } from './styles';
import { AuthContext } from '../../contexts/authContext'
import Toast from '../../components/Toast';


export default function Login() {

    const [type, setType] = useState('singup')
    const { login, signUp, error, setError } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            {(error.email || error.password || error.userName) && <Toast text={error?.email?.message || error?.password?.message || error?.userName.message} bg={theme.colors.red} />}
            <View style={styles.titleContainer}>
                <Text style={[styles.Title, styles.titleContrast]}>BL</Text>
                <Text style={styles.Title}>Homework</Text>
            </View>

            {
                type === 'singup' && (
                    <View style={[styles.inputContainer, error.userName && { borderWidth: 1, borderColor: theme.colors.red }]}>
                        <FontAwesome5 name='user' size={theme.icons.sm} colors={theme.colors.white} />
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            placeholderTextColor={theme.colors.grey}
                        />
                    </View>
                )
            }

            <View style={[styles.inputContainer, error.email && { borderWidth: 1, borderColor: theme.colors.red }]}>
                <MaterialCommunityIcons name='email' size={theme.icons.sm} colors={theme.colors.white} />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor={theme.colors.grey}
                    autoCapitalize={false}
                    keyboardType='email-address'
                />
            </View>

            <View style={[styles.inputContainer, error.password && { borderWidth: 1, borderColor: theme.colors.red }]}>
                <FontAwesome name='lock' size={theme.icons.sm} colors={theme.colors.white} />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor={theme.colors.grey}
                    secureTextEntry={showPassword}
                />
                <TouchableOpacity style={styles.btnShowPassword} onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <Entypo name='eye' size={theme.icons.sm} colors={theme.colors.white} />
                        ) :
                        (
                            <Entypo name='eye-with-line' size={theme.icons.sm} colors={theme.colors.white} />
                        )}


                </TouchableOpacity>
            </View>
            {
                type === 'singup' && (
                    <View style={styles.inputContainer}>
                        <FontAwesome name='lock' size={theme.icons.sm} colors={theme.colors.white} />
                        <TextInput
                            style={styles.input}
                            placeholder='Confirme a senha'
                            placeholderTextColor={theme.colors.grey}
                        />
                    </View>
                )
            }

            <TouchableOpacity style={styles.btn} onPress={() => type == 'login' ? login(email, password) : signUp(email, password, name)}>
                <Text style={styles.textBtn}>{type === 'login' ? 'Entrar' : 'Criar conta'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setError({})
                setType(type === 'login' ? 'singup' : 'login')
            }}>
                <Text>{type === 'login' ? 'Não possui uma conta? Crie já!' : 'Já possui uma conta? Faça login!'}</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}