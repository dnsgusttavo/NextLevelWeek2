import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageheaderProps{
    title: string;
}

const PageHeader: React.FC<PageheaderProps> = ({title}) => {

    const { navigate } = useNavigation();

    const handleGoBack = () => {
        navigate('Landing');
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain"/>
            </View>

        <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default PageHeader;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    }
})
