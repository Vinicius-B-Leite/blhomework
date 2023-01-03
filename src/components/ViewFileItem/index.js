import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FileViewer from "react-native-file-viewer";
import * as RNFS from 'react-native-fs'
import * as S from './styles'
import { useTheme } from 'styled-components';






export default function ViewFileItem({ item }) {
    const url = item.url
    const theme = useTheme()

    function getUrlExtension(url) {
        return url.split(/[#?]/)[0].split(".").pop().trim();
    }


    function handleFilePreview() {
        const extension = getUrlExtension(url);
        const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;

        const options = {
            fromUrl: url,
            toFile: localFile,
        };

        RNFS.downloadFile(options)
            .promise.then(() => {
                FileViewer.open(localFile)
            })
    }

    return (
        <S.Container onPress={() => handleFilePreview()}>
            {
                item.ext.includes('image') ?
                    (
                        <Feather name='image' size={theme.icons.sm} color={theme.colors.white} />
                    ) :
                    (
                        <Ionicons name='ios-document' size={theme.icons.sm} color={theme.colors.white} />
                    )
            }   

            <S.FileName numberOfLines={1} >{item.name}</S.FileName>
        </S.Container>
    );
}