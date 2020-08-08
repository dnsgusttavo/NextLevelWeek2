import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

const Favorites = () => {
    return (
        <View style={styles.container}>
           <PageHeader title="Meus proffys favoritos"/>
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

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop: -40,
    }
})

