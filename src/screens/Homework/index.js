import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { HomeworkContext } from '../../contexts/homeworkContext';
import Divisor from '../../components/Divisor'
import { FlatList } from 'react-native-gesture-handler';
import * as S from './styles'
import { useTheme } from 'styled-components';
import ViewFileItem from '../../components/ViewFileItem';



export default function Homework({ route, navigation }) {
    const theme = useTheme()
    const { subject, title, deadline, description, filesRefs } = route.params.data
    const { getHomeworkFiles, loading } = useContext(HomeworkContext)

    const [files, setFiles] = useState([])

    useEffect(() => {

        filesRefs.forEach(file => {
            getHomeworkFiles(file, (url) => setFiles(old => [...old, url]))

        })
    }, [])

    return (
        <S.Container>
            <S.Header >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <S.TextGoBack numberOfLines={1}>{'<  '} {subject.name}</S.TextGoBack>
                </TouchableOpacity>

                <S.SucessButon >
                    <Text>concluir</Text>
                </S.SucessButon>
            </S.Header>

            <Divisor />

            <S.Main>
                <S.Title>{title}</S.Title>
                <S.SimpleText>Data de entrega: {deadline.toDate().getDate()}/{deadline.toDate().getMonth() + 1}</S.SimpleText>

                <S.Desciption showsVerticalScrollIndicator={false} >
                    <S.SimpleText>{description}</S.SimpleText>
                </S.Desciption>


                {
                    loading ? <ActivityIndicator style={{ marginTop: '8%' }} color={theme.colors.text} size={theme.icons.md} /> :
                        (
                            <S.FilesContainer>
                                <S.SimpleText >Material de apoio</S.SimpleText>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={files}
                                    renderItem={({ item }) => <ViewFileItem item={item} />}
                                />
                            </S.FilesContainer>
                        )
                }
            </S.Main>
        </S.Container>
    );
}