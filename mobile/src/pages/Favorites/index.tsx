import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PageHeader from '../../components/PageHeader'

const Favorites = () => {
    return (
        <View style={styles.container}>
           <PageHeader title="Meus proffys favoritos"/>
        </View>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    }
})
