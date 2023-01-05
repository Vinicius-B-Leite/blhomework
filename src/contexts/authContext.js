import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';




export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [error, setError] = useState({})
    const [user, setUser] = useState(auth()?.currentUser?.toJSON())
    const [isOwner, setIsOwner] = useState(false)

    function handleAuthError(err) {

        if (err.code == 'auth/invalid-email') setError({
            email: {
                message: 'Email inválido'
            }
        })
        if (err.code == 'auth/weak-password') setError({
            password: {
                message: 'Senha fraca'
            }
        })
        if (err.code == 'auth/email-already-in-use' || err.code == 'auth/account-exists-with-different-credential' || err.code == 'auth/credential-already-in-use') setError({
            email: {
                message: 'Este email já está em uso'
            }
        })
        if (err.code == 'auth/user-not-found' || err.code == 'auth/null-user') setError({
            email: {
                message: 'Usuário não encontrado'
            }
        })
        if (err.code == 'auth/wrong-password') setError({
            email: {
                message: 'Email ou senha errada'
            },
            password: {
                message: 'Email ou senha errada'
            }
        })
        console.log(error)
    }

    function signUp(email, password, userName) {

        if (email === '') {
            setError({
                email: {
                    message: 'Informe um email'
                }
            })
        }

        else if (password === '') {
            setError({
                password: {
                    message: 'Informe uma senha'
                }
            })
        }

        else if (userName === '') setError({
            userName: {
                message: 'Informe um nome'
            }
        })



        else if (email !== '' && password !== '' && userName !== '') {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async (userCredencial) => {

                    await userCredencial.user.updateProfile({
                        displayName: userName,
                        photoURL: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=740&t=st=1670249318~exp=1670249918~hmac=bfd9f0c087b6b128ec415b6e204314f5c8a30b6e842ca967ed15aca502c6d1a3'
                    })

                    setUser(auth().currentUser.toJSON())

                    await firestore()
                        .collection('users')
                        .doc(userCredencial.user.uid)
                        .set({
                            displayName: userName,
                            photoURL: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=740&t=st=1670249318~exp=1670249918~hmac=bfd9f0c087b6b128ec415b6e204314f5c8a30b6e842ca967ed15aca502c6d1a3',
                            tokenFCM: ''
                        })
                    AsyncStorage.setItem('_userPassword', password)

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
                    setUser({ ...auth().currentUser.toJSON() })
                    AsyncStorage.setItem('_userPassword', password)
                })
                .catch(err => {
                    handleAuthError(err)
                })
        } else {
            if (email === '') {
                setError({
                    email: {
                        message: 'Informe um email'
                    }
                })
            }

            else if (password === '') {
                setError({
                    password: {
                        message: 'Informe uma senha'
                    }
                })
            }

        }
    }

    function logout() {
        auth().signOut().then(() => {
            setUser(null)
        })
    }

    async function changeUserPhoto(file) {
        const ref = storage().ref(`users/${user.uid}`)
        await ref.putFile(file.fileCopyUri)

        const downloadUrl = await ref.getDownloadURL()

        await Promise.all([
            firestore().collection('users').doc(user.uid).update({ photoURL: downloadUrl }),
            auth().currentUser.updateProfile({ photoURL: downloadUrl })
        ])
    }

    async function changeUserName(newName) {
        if (newName !== '') {
            await Promise.all([
                auth().currentUser.updateProfile({ displayName: newName }),
                firestore().collection('users').doc(user.uid).update({ displayName: newName })
            ])
            setUser(auth().currentUser.toJSON())
        }
    }

    async function changeEmail(newEmail) {
        if (newEmail !== '') {
            await reauthenticate()
            await auth().currentUser.updateEmail(newEmail)
            setUser((oldUser) => ({ ...oldUser, email: newEmail }))
        }
    }

    async function changePassword(newPassword) {
        if (newPassword !== '') {
            await reauthenticate()
            await Promise.all([
                auth().currentUser.updatePassword(newPassword),
                AsyncStorage.setItem('_userPassword', newPassword)
            ])
            setUser((oldUser) => ({ ...oldUser }))
        }
    }
    async function reauthenticate() {
        const password = await AsyncStorage.getItem('_userPassword')
        var cred = auth.EmailAuthProvider.credential(
            user.email, password);
        return auth().currentUser.reauthenticateWithCredential(cred)
    }

    return (
        <AuthContext.Provider value={{
            signUp,
            error,
            setError,
            login,
            user,
            setIsOwner,
            isOwner,
            logout,
            changeUserPhoto,
            changeUserName,
            changeEmail,
            changePassword
        }}>
            {children}
        </AuthContext.Provider>
    );
}