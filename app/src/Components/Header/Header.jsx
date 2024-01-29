import React from 'react'

import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image source={{
                    uri: 'https://via.placeholder.com/60x50',
                }}></Image>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        top: 0,
        left: 0,
        right: 0,
        height: 110,
        backgroundColor: '#b20000',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    imageContainer:{
        backgroundColor:"#00FF00",
        height: 40,
        width: 40,
        marginLeft: 35,
        marginTop: 30
    }
});
