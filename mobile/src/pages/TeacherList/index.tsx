import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { ScrollView } from 'react-native'


const TeacherList = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
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
        marginTop: -60,
    }
})
