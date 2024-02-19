import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Divider() {
    return (
        <View style={styles.divider}>

        </View>
    )
}
const styles = StyleSheet.create({
    divider: {
        borderBottomColor: '#D0D0D0',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        color: '#D0D0D0',
        width: "100%",
        height: 1
    },
});