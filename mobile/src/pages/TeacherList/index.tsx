import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons';

const TeacherList = () => {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={
                <BorderlessButton onPress={()=> {setIsFiltersVisible(!isFiltersVisible)}}>
                    <Feather name="filter" size={22} color="#FFF"/>
                </BorderlessButton>
            
            }>
                {isFiltersVisible && (
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a matéria?"/>
                    
                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia?"/>
                                </View>

                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia?"/>
                                </View>
                            </View>
                            <RectButton style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>Buscar</Text>
                            </RectButton>
                        </View>
                
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList} 
            contentContainerStyle={{
                paddingHorizontal: 26, 
                paddingBottom:16}
            }>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>
    )
}

export default TeacherList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 24,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%'
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
})
