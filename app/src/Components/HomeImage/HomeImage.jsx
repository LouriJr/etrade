import React from 'react'
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native';

export default function HomeImage() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image}
                    imageStyle={{ borderRadius: 10, height: '100%' }}
                    source={{
                        uri: 'https://via.placeholder.com/60x140',
                    }}>

                    <Text style={styles.text}>Inside</Text>
                </ImageBackground >
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        height: 140,
        width: '90%',
        padding: 5,
        marginTop: 10,

        borderRadius: 10,
    },
    image: {
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        height: '100%',
        borderRadius: 10
    },
});