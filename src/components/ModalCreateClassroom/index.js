import { Avatar, Button, HStack, Icon, Modal, Spinner, Text, useClipboard } from 'native-base';
import React, { useContext, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/colors';
import Input from '../../components/Input'
import Feather from 'react-native-vector-icons/Feather'
import { ToastAndroid, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import { ClassroomContext } from '../../contexts/classroomContext';

export default function ModalCreateClassroom({ modalVisible, onClose }) {
    const { createClassRoom, classroomID, loadingCreateClassroom } = useContext(ClassroomContext)
    const { onCopy } = useClipboard()

    const [className, setClassName] = useState('')
    const [classRoomPhoto, setClassRoomPhoto] = useState('')


    async function pickImage() {
        DocumentPicker.pick({
            allowMultiSelection: false,
            type: 'image/*',
            copyTo: 'documentDirectory'
        }).then(data => {
            setClassRoomPhoto(data[0])
        })
    }

    function copyClassroomID() {
        onCopy(classroomID)
        ToastAndroid.show('Texto copiado', ToastAndroid.SHORT)
    }

    return (
        <Modal onClose={onClose} isOpen={modalVisible} size='full' bg={colors.backgrounbColorSecundary} overlayVisible={true} animationPreset='fade' justifyContent='center' alignItems='center' p={5}>
            <Modal.Content flex={1} bg={colors.blackBackgroundColor} p={5} alignItems='center'>
                <Button onPress={pickImage} w='50%' h='28%' borderRadius='full' backgroundColor={colors.backgrounbColor} borderWidth={1} borderColor={colors.white} marginBottom={10}>
                    {
                        classRoomPhoto ?
                            <Avatar
                                size='2xl'
                                source={{ uri: classRoomPhoto.fileCopyUri }}
                            />
                            : (
                                <Icon
                                    as={Ionicons}
                                    name='add'
                                    color={colors.white}
                                    size='4xl'
                                />
                            )
                    }
                </Button>
                <Input
                    value={className}
                    setValue={setClassName}
                    placeholder='Digite o nome da sala'
                    bg={colors.backgrounbColor}
                />
                <HStack w='100%' bg={colors.backgrounbColor} borderRadius='lg' alignItems='center' px={3} py={3} my='2' pl={3} justifyContent='space-between'>
                    <Text fontSize='md' color={classroomID ? colors.white : colors.grey}>{classroomID ? classroomID : 'O id irá aparecer aqui'}</Text>
                    <TouchableOpacity onPress={copyClassroomID}>
                        <Icon
                            as={Feather}
                            name='clipboard'
                            color={colors.white}
                            size='md'
                        />
                    </TouchableOpacity>
                </HStack>

                <Button onPress={() => createClassRoom(classRoomPhoto.fileCopyUri, className)} bg={colors.contrast} w='100%' mt={20}>
                    {loadingCreateClassroom ? <Spinner color={colors.white} />  : 'Criar sala'}
                </Button>

            </Modal.Content>
        </Modal>
    );
}