import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export default function FiltroTurnoOption({ turno, selecionado, selecionar, height }) {
    let icon;
    switch (turno) {
        default:
        case 'Manhã':
            icon = faSun;
            break;
        case 'Tarde':
            icon = faCloudSun;
            break;
        case 'Noite':
            icon = faMoon;
            break;
    }

    return (
        <TouchableOpacity
            style={[
                styles.container,
                selecionado ? styles.selecionado : null,
                { height, width: height * 2.22 }
            ]}
            onPress={() => {
                selecionar(turno);
            }}>
            <FontAwesomeIcon icon={icon} style={[styles.icon, selecionado ? styles.selecionado : null]} size={24} />
            <Text style={[styles.text, selecionado ? styles.selecionado : null]}>
                {turno}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 45,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 5,
        color: 'gray'
    },
    icon: {
        color: 'gray'
    },
    selecionado: {
        borderColor: "#b20",
        color: "#b20"
    }
});