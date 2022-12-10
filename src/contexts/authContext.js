import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'


export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [error, setError] = useState({})
    const [user, setUser] = useState(auth()?.currentUser?.toJSON())

    function handleAuthError(err) {
        if (err.code == 'auth/invalid-email') setError({
            email: {
                message: 'Email inválido'
            }
        })
        else if (err.code == 'auth/weak-password') setError({
            password: {
                message: 'Senha fraca'
            }
        })
        else if (err.code == 'auth/email-already-in-use') setError({
            email: {
                message: 'Este email já está em uso'
            }
        })
        else if (err.code == 'auth/wrong-password') setError({
            email: {
                message: 'Email ou senha errada'
            },
            password: {
                message: 'Email ou senha errada'
            }
        })
        console.log(err.code)
    }

    function signUp(email, password, userName) {

        if (userName.length <= 2) setError({
            userName: {
                message: 'Nome muito pequeno'
            }
        })

        else if (email !== '' && password == confirmPassword && userName !== '') {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredencial) => {
                    userCredencial.user.updateProfile({
                        displayName: userName,
                        photoURL: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=740&t=st=1670249318~exp=1670249918~hmac=bfd9f0c087b6b128ec415b6e204314f5c8a30b6e842ca967ed15aca502c6d1a3'
                    })
                    setUser(auth().currentUser.toJSON())
                })
                .catch(err => {
                    handleAuthError(err)
                })
        }
    }

    function login(email, password) {
        if (email !== '' && password !== '') {
            auth().signInWithEmailAndPassword(email, password)
                .then((userCredencial) => {
                    setUser(auth().currentUser.toJSON())
                })
                .catch(err => {
                    handleAuthError(err)
                })
        }
    }

    return (
        <AuthContext.Provider value={{ signUp, error, setError, login, user }}>
            {children}
        </AuthContext.Provider>
    );
}