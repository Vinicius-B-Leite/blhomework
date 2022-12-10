import React, { startTransition, useContext, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AuthContext } from '../../contexts/authContext'
import { pickImage } from '../../utils/pickImage'
import { theme } from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'


export default function Profile() {

    const { user } = useContext(AuthContext)
    const [photo, setPhoto] = useState(user.photoURL)


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Perfil</Text>
            </View>

            <View style={styles.divisor} />


            <View style={styles.main}>

                <TouchableOpacity style={styles.avatarBtn} onPress={() => pickImage(setPhoto)}>
                    <Image source={{ uri: photo.fileCopyUri || user.photoURL }} style={styles.avatar} />
                </TouchableOpacity>

                <Text style={styles.userName}>{user.displayName}</Text>
                <Text style={styles.email}>{user.email}</Text>

                <View style={styles.options} >
                    <View style={styles.icons}>
                        <AntDesign name='user' size={theme.icons.md} color={theme.colors.contrast} />
                    </View>
                    <View style={styles.optTextContainer}>
                        <Text style={styles.optText}>Nome de usuário</Text>
                        <Text style={styles.optText}>{'>'}</Text>
                    </View>
                </View>
                <View style={styles.options} >
                    <View style={styles.icons}>
                        <MaterialCommunityIcons name='email-outline' size={theme.icons.md} color={theme.colors.contrast} />
                    </View>
                    <View style={styles.optTextContainer}>
                        <Text style={styles.optText}>Endereço de email</Text>
                        <Text style={styles.optText}>{'>'}</Text>
                    </View>
                </View>
                <View style={styles.options} >
                    <View style={styles.icons}>
                        <AntDesign name='lock' size={theme.icons.md} color={theme.colors.contrast} />
                    </View>
                    <View style={styles.optTextContainer}>
                        <Text style={styles.optText}>Senha</Text>
                        <Text style={styles.optText}>{'>'}</Text>
                    </View>
                </View>
                <View style={styles.options} >
                    <View style={styles.icons}>
                        <Feather name='sun' size={theme.icons.md} color={theme.colors.contrast} />
                    </View>
                    <View style={styles.optTextContainer}>
                        <Text style={styles.optText}>Tema</Text>
                        <Text style={styles.optText}>{'>'}</Text>
                    </View>
                </View>
                <View style={styles.options} >
                    <View style={styles.icons}>
                        <MaterialIcons name='logout' size={theme.icons.md} color={theme.colors.contrast} />
                    </View>
                    <View style={styles.optTextContainer}>
                        <Text style={styles.optText}>Sair</Text>
                        <Text style={styles.optText}>{'>'}</Text>
                    </View>
                </View>





            </View>

        </SafeAreaView>


    );
}