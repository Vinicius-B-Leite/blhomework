import React, { useContext } from 'react';
import { Button, HStack, Avatar, Text } from 'native-base';
import { AuthContext } from '../../contexts/authContext';
import { colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

export default function Header() {

    const { user } = useContext(AuthContext)


    return (
        <Button bg='transparent' justifyContent='flex-start' pl={5} p={4} _pressed={{ backgroundColor: 'transparent' }}>
            <HStack w='100%' alignItems='center' space={5}>
                <Avatar source={{ uri: user.photoURL }} size={10} />
                <Text color={colors.white} fontSize={15} numberOfLines={1}>{user.displayName}</Text>
            </HStack>
        </Button>
    );
}