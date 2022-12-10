import React, { useContext, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { ActivityIndicator, Dimensions, Image, Modal, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import { ClassroomContext } from '../../contexts/classroomContext';
import { theme } from '../../theme';
import Clipboard from '@react-native-clipboard/clipboard';
import { pickImage } from '../../utils/pickImage';



export default function ModalCreateClassroom({ modalVisible, onClose }) {
    const { createClassRoom, classroomID, loadingCreateClassroom } = useContext(ClassroomContext)

    const [classroomName, setClassroomName] = useState('')
    const [classRoomPhoto, setClassRoomPhoto] = useState('')


   

    return (
        <Modal animationType='slide' transparent visible={modalVisible} onRequestClose={onClose}>


            <View style={styles.container}>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.pickImage} onPress={() => pickImage(setClassRoomPhoto)}>
                        {
                            classRoomPhoto ?
                                (
                                    <Image source={{ uri: classRoomPhoto.fileCopyUri }} style={{width: '100%', height: '100%', borderRadius: theme.borderRadius.full}} />
                                )
                                :
                                (
                                    <Ionicons name='add' color={theme.colors.white} size={theme.icons.lg} />
                                )
                        }
                    </TouchableOpacity>

                    <TextInput
                        value={classroomName}
                        onChangeText={setClassroomName}
                        style={styles.inp}
                        placeholder='Digite o nome da sala'
                        placeholderTextColor={theme.colors.grey}
                    />

                    <View style={[styles.inp, styles.codeContainer]} >
                        <Text style={{color: classroomID ? theme.colors.white : theme.colors.grey}} > {classroomID ? classroomID : 'O código irá aparecer aqui'}</Text>
                        <TouchableOpacity onPress={() => Clipboard.setString(classroomID)}>
                            <Feather name='clipboard' color={{color: classroomID ? theme.colors.white : theme.colors.grey}} size={theme.icons.sm} />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={styles.createClassroomButton} onPress={() => createClassRoom(classRoomPhoto.fileCopyUri, classroomName)}>
                        <Text style={styles.createClassroomButtonText}>{loadingCreateClassroom ? <ActivityIndicator size={theme.icons.sm} color={theme.colors.white}/> : 'Criar'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.closeBtn} onPress={onClose} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgrounbColorSecundary,
        padding: '5%',
        justifyContent: 'center',
        zIndex: 2,
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        zIndex: -1
    },
    main: {
        backgroundColor: theme.colors.blackBackgroundColor,
        width: '100%',
        height: Dimensions.get('screen').height / 1.5,
        alignItems: 'center',
        borderRadius: theme.borderRadius.md,

    },
    pickImage: {
        width: '40%',
        height: '27%',
        borderRadius: theme.borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.white,
        marginTop: '10%'
    },
    inp: {
        width: '80%',
        height: '10%',
        backgroundColor: theme.colors.backgrounbColor,
        marginTop: '5%',
        borderRadius: theme.borderRadius.sm,
        paddingHorizontal: '5%',
        fontSize: theme.font.sm
    },
    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: theme.font.sm
    },
    createClassroomButton: {
        width: '80%',
        backgroundColor: theme.colors.contrast,
        marginTop: '20%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.borderRadius.sm
    },
    createClassroomButtonText: {
        color: theme.colors.white,
        fontSize: theme.font.sm
    }
})