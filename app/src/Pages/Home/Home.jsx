import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ListaDeProdutos from '../../Components/ListaDeProdutos/ListaDeProdutos'
import { GestureHandlerRootView, PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import FiltroTurno from '../../Components/FiltroTurno/FiltroTurno';
import { API_URL } from '@env'
import axios from 'axios';

export default function Home() {

    const [produtos, setProdutos] = useState();
    const [turnoSelecionado, setTurno] = useState();

    useEffect(() => {
        ListarProdutos();
    }, []);

    useEffect(() => {
        ListarProdutos();
    }, [turnoSelecionado]);

    async function ListarProdutos() {

        let idTurno;
        switch (turnoSelecionado) {
            default:
            case "Manhã":
                idTurno = 1;
                break;
            case "Tarde":
                idTurno = 2;
                break;
            case "Noite":
                idTurno = 3;
                break;
        }

        const response = await axios.get(API_URL + '/Produtos/ListarPorTurno?turno=' + idTurno);

        if (response.status !== 200) {
            alert('Erro ao listar produtos');
            return;
        }

        setProdutos(response.data);
    }

    return (
        <View>
            <GestureHandlerRootView>
                <PanGestureHandler>
                    <ScrollView nestedScrollEnabled={false} contentContainerStyle={styles.container}>
                        <FiltroTurno turnoSelecionado={turnoSelecionado} setTurno={setTurno}></FiltroTurno>
                        <ListaDeProdutos produtos={produtos}></ListaDeProdutos>
                    </ScrollView>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
});