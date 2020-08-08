import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PageHeader from '../../components/PageHeader'


const TeacherList = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
        </View>
    )
}

export default TeacherList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    }
})
