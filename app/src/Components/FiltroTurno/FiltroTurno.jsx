import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import FiltroTurnoOption from './FiltroTurnoOption'

export default function FiltroTurno({ turnoSelecionado, setTurno }) {


    useEffect(() => {
        turnoAtual();
    }, []);

    function turnoAtual() {
        const horaAtual = new Date().getHours();
        let turno;

        if (horaAtual < 12) {
            turno = "Manhã"
        }
        else if (horaAtual < 18) {
            turno = "Tarde"
        }
        else {
            turno = "Noite"
        }
        setTurno(turno);
    }

    return (
        <View style={styles.container}>
            <FiltroTurnoOption turno={"Manhã"} selecionado={turnoSelecionado === "Manhã"} selecionar={setTurno} height={54}></FiltroTurnoOption>
            <FiltroTurnoOption turno={"Tarde"} selecionado={turnoSelecionado === "Tarde"} selecionar={setTurno} height={54}></FiltroTurnoOption>
            <FiltroTurnoOption turno={"Noite"} selecionado={turnoSelecionado === "Noite"} selecionar={setTurno} height={54}></FiltroTurnoOption>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
        width: "100%"
    }
});
