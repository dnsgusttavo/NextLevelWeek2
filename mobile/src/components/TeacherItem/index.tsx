import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    
    const createNewConnection = () => {
        api.post('connections', { user_id: teacher.id});
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: `${teacher.avatar}`}}/>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '} <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}> 
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee',
    },
    profileInfo: {
        marginLeft: 16,
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180'
    },
    footer: {
        backgroundColor: '#fafafc',
        marginTop: 24,
        padding: 18,
        alignItems: 'center'
    },
    price: {
        fontFamily: 'Archivo_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    favorited: {
        backgroundColor: '#e33d3d'
    },
    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    contactButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    }
})
