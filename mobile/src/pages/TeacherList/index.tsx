import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'
import { useFocusEffect} from '@react-navigation/native'
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'

const TeacherList = () => {

    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const loadFavorites = () => {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
              const favoritedTeachers = JSON.parse(response) 
              const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id)
              setFavorites(favoritedTeachersIds)
            }
           
          })
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

    const handleFiltersSubmit = async () => {
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setTeachers(res.data);
        setIsFiltersVisible(false);
        loadFavorites();
    }

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
                            <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a matéria?"
                            value={subject} onChangeText={text => setSubject(text)}/>
                    
                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia?"
                                    value={week_day} onChangeText={text => setWeekDay(text)}/>
                                </View>

                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o horário?"
                                    value={time} onChangeText={text => setTime(text)}/>
                                </View>
                            </View>
                            <RectButton style={styles.submitButton} onPress={() => {handleFiltersSubmit()}}>
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
                {teachers.map((teacher: Teacher) => {
                   return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}/>;
               })}
                
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
