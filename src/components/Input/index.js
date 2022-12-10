import React from 'react';
import { Input as NBInput, FormControl } from 'native-base';
import { colors } from '../../theme/colors';

export default function Input({ leftIcon, value, setValue, placeholder, password, error, bg }) {
    return (
        <FormControl isInvalid={!!error} _focus={true} isRequired={true}>
            <FormControl.ErrorMessage>
                {error?.message}
            </FormControl.ErrorMessage>
            <NBInput
                leftElement={leftIcon}
                type={password && 'password'}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                borderWidth={0}
                fontSize='md'
                color='#fff'
                w='100%'
                borderRadius='lg'
                bg={ bg || colors.blackBackgroundColor}
                my='2'
                py={3}
                alignItems='center'
                isFocused={!!error}
                _focus={{
                    borderWidth: 1,
                    borderColor: colors.contrast,
                    backgroundColor: colors.blackBackgroundColor
                }}
                
            />
        </FormControl>
    );
}