import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext'
import { pickDocument } from '../../utils/pickDocument'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import ModalChangeUserCredencial from '../../components/ModalChangeUserCredencial';
import ProfileOptions from '../../components/ProfileOptions';
import ThemePicker from '../../components/ThemePicker';
import Divisor from '../../components/Divisor'
import * as S from './styles'
import { useTheme } from 'styled-components';



export default function Profile() {
    const theme = useTheme()
    const { user, logout, changeUserPhoto, changeUserName, changeEmail, changePassword } = useContext(AuthContext)
    const [photo, setPhoto] = useState(user.photoURL)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalProps, setModalProps] = useState({})

    const [themePickerVisible, setThemePickerVisible] = useState(false)

    function openModal(callback, placeholder, title) {
        setModalProps({ callback, placeholder, title })
        setModalVisible(true)
    }


    return (
        <S.Container >
            <S.Header >
                <S.HeaderTitle >Perfil</S.HeaderTitle>
            </S.Header>

            <Divisor />

            <S.Main >

                <S.AvatarBtn onPress={() => pickDocument({ setState: setPhoto, type: 'image/*', onSucess: (file) => changeUserPhoto(file[0]) })}>
                    <S.Avatar source={{ uri: photo[0].fileCopyUri || user.photoURL }} />
                </S.AvatarBtn>

                <S.UserName >{user.displayName}</S.UserName>
                <S.Email >{user.email}</S.Email>


                <ProfileOptions
                    callback={() => openModal((text) => changeUserName(text), 'Novo nome', 'Atualizar nome')}
                    icon={<AntDesign name='user' size={theme.icons.md} color={theme.colors.contrast} />}
                    name='Nome de usuário' />

                <ProfileOptions
                    callback={() => openModal((txt) => changeEmail(txt), 'Novo email', 'Atualizar email')}
                    icon={<MaterialCommunityIcons name='email-outline' size={theme.icons.md} color={theme.colors.contrast}
                    />} name='Endereço de email' />

                <ProfileOptions
                    callback={() => openModal((text) => changePassword(text), 'Nova senha', 'Atualizar senha')}
                    icon={<AntDesign name='lock' size={theme.icons.md} color={theme.colors.contrast} />}
                    name='Senha' />

                <ProfileOptions
                    callback={() => setThemePickerVisible(true)}
                    icon={<Feather name='sun' size={theme.icons.md} color={theme.colors.contrast} />}
                    name='Tema' />

                <ProfileOptions
                    callback={logout}
                    icon={<MaterialIcons name='logout' size={theme.icons.md} color={theme.colors.contrast} />}
                    name='Sair' />

            </S.Main>

            <ThemePicker
                modalVisible={themePickerVisible}
                onClose={() => setThemePickerVisible(false)}
            />
            <ModalChangeUserCredencial
                modalVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                callback={(txt) => modalProps.callback(txt)}
                placeholder={modalProps.placeholder}
                title={modalProps.title}
            />
        </S.Container>


    );
}