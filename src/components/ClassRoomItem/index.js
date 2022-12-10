import React from 'react';
import { Avatar, Button, HStack, Text } from 'native-base'
import { colors } from '../../theme/colors';




export default function ClassRoomItem({ item }) {
    return (
        <Button justifyContent='flex-start' bg={colors.blackBackgroundColor} borderRadius='lg' mt={5} p={3} _pressed={{backgroundColor: colors.backgrounbColor}} >
            <HStack alignItems='center' space={3}>
                <Avatar source={{ uri: item.avatarURL }} ml={3} size='10' />
                <Text color={colors.white} numberOfLines={1}>{item.name}</Text>
            </HStack>
        </Button>
    );
}