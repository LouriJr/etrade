import { StyleSheet, View } from 'react-native'
import FiltroTurnoOption from './FiltroTurnoOption'

export default function TurnosSelector({ turnosSelecionados, setTurnos }) {

    function handleSelect(turnoClicado) {
        let turnos = [...turnosSelecionados];
        const turnoJaSelecionado = turnos.includes(turnoClicado);

        if (turnoJaSelecionado) {
            turnos = turnos.filter(item => item !== turnoClicado);
        } else {
            turnos.push(turnoClicado);
        }
        setTurnos(turnos);
    }

    return (
        <View style={styles.container}>
            <FiltroTurnoOption turno={"Manhã"} selecionado={turnosSelecionados.includes("Manhã")} selecionar={handleSelect} height={45}></FiltroTurnoOption>
            <FiltroTurnoOption turno={"Tarde"} selecionado={turnosSelecionados.includes("Tarde")} selecionar={handleSelect} height={45}></FiltroTurnoOption>
            <FiltroTurnoOption turno={"Noite"} selecionado={turnosSelecionados.includes("Noite")} selecionar={handleSelect} height={45}></FiltroTurnoOption>
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
