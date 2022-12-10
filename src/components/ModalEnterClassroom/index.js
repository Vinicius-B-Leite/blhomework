import { Box, Button, KeyboardAvoidingView, Modal, Text } from 'native-base';
import React, { useContext, useState } from 'react';
import { colors } from '../../theme/colors';
import Input from '../Input';
import { ClassroomContext } from '../../contexts/classroomContext'



export default function ModalEnterClassroom({ modalVisible, onClose }) {

    const { enterInClassroom } = useContext(ClassroomContext)
    const [classroomCode, setClassroomCode] = useState()

    return (
        <Modal onClose={onClose} isOpen={modalVisible} size='full' bg={colors.backgrounbColorSecundary} overlayVisible={true} animationPreset='slide' justifyContent='center' alignItems='center' >
                <Box p='5%' alignItems='center' borderTopRadius={40} borderTopLeftRadius={40} w='100%' h='40%' position='absolute' bottom={0} bg={colors.blackBackgroundColor}>
                    <Text fontWeight='bold' fontSize={18} lineHeight={20} mt={5} color={colors.white}>Entrar em uma sala</Text>

                    <Input
                        placeholder='Digite o código da sala'
                        value={classroomCode}
                        setValue={setClassroomCode}
                        bg={colors.backgrounbColor}
                    />

                    <Button onPress={() => enterInClassroom(classroomCode)} w='100%' bg={colors.contrast} mt={20} _text={{ color: colors.white }}>
                        Enviar
                    </Button>
                </Box>
        </Modal>

    );
}