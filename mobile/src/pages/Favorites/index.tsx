import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
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
