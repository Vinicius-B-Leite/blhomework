import React from 'react';
import * as S from './styles'




export default function ProfileOptions({callback, icon, name}) {
    return (
        <S.Options onPress={callback} >
            <S.Icons>
                {icon}
            </S.Icons>
            <S.OptTextContainer>
                <S.OptText>{name}</S.OptText>
                <S.OptText>{'>'}</S.OptText>
            </S.OptTextContainer>
        </S.Options>
    );
}

