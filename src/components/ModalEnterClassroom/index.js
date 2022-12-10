import React, { useContext, useState } from 'react';
import { Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { ClassroomContext } from '../../contexts/classroomContext';
import { theme } from '../../theme';



export default function ModalEnterClassroom({ modalVisible, onClose }) {

    const { enterInClassroom } = useContext(ClassroomContext)
    const [classroomCode, setClassroomCode] = useState()

    return (
        <Modal animationType='slide' transparent visible={modalVisible} onRequestClose={onClose}>


            <View style={styles.container}>

                <TouchableOpacity onPress={() => onClose()} style={styles.close}>
                    <View />
                </TouchableOpacity>

                <View style={styles.main}>
                    <Text style={styles.title}>Entrar em uma sala</Text>
                    <TextInput
                        value={classroomCode}
                        onChangeText={setClassroomCode}
                        style={styles.inp}
                        placeholder='Digite o código da sala'
                        placeholderTextColor={theme.colors.grey}
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => enterInClassroom(classroomCode)}>
                        <Text style={styles.textBtn}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgrounbColorSecundary
    },
    close: {
        flex: 1
    },
    main: {
        height: Dimensions.get('screen').height / 2.5,
        backgroundColor: theme.colors.blackBackgroundColor,
        borderTopLeftRadius: theme.borderRadius.lg,
        borderTopRightRadius: theme.borderRadius.lg,
        alignItems: 'center'
    },
    title: {
        color: theme.colors.white,
        fontSize: theme.font.md,
        marginTop: '13%'
    },
    inp: {
        backgroundColor: theme.colors.backgrounbColor,
        width: '80%',
        fontSize: theme.font.sm,
        paddingLeft: '5%',
        marginTop: '5%',
        borderRadius: theme.borderRadius.sm,
    },
    btn: {
        width: '80%',
        backgroundColor: theme.colors.contrast,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '2%',
        borderRadius: theme.borderRadius.sm,
        marginTop: '10%'
    },
    textBtn: {
        fontSize: theme.font.sm,
        color: theme.colors.white
    }
})