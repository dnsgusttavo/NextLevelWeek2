import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const GiveClasses = () => {

    const { goBack } = useNavigation();

    const handleNavigateBack = () => {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
                    <Text style={styles.title}>Quer ser um Proffy?</Text>
                    <Text style={styles.description}>Pra começar vocÊ precisa se cadastrar como um professor na nossa plataforma web</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },
    content: {
      flex: 1,
      justifyContent: 'center',  
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },
    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
})
