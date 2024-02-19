import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ListaDeProdutos from '../../Components/ListaDeProdutos/ListaDeProdutos'
import { GestureHandlerRootView, PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import FiltroTurno from '../../Components/FiltroTurno/FiltroTurno';
import { API_URL } from '@env'
import axios from 'axios';

export default function Home() {

    const [produtos, setProdutos] = useState([
        {
            "id": 1,
            "nome": "Pão Doce",
            "descricao": "Pão",
            "valor": 12,
            "usuario": {
                "id": 1,
                "nome": "Nathan",
                "email": null,
                "senha": null,
                "descricao": null,
                "celular": "string",
                "tipo": null,
                "turnos": null
            },
            "status": null,
            "imagens": []
        },
        {
            "id": 2,
            "nome": "Pão Salgado",
            "descricao": "Pão",
            "valor": 12,
            "usuario": {
                "id": 1,
                "nome": "Nathan",
                "email": null,
                "senha": null,
                "descricao": null,
                "celular": "string",
                "tipo": null,
                "turnos": null
            },
            "status": null,
            "imagens": []
        },
        {
            "id": 5,
            "nome": "Palmeiras",
            "descricao": "Palmeiras",
            "valor": 10,
            "usuario": {
                "id": 1,
                "nome": "Nathan",
                "email": null,
                "senha": null,
                "descricao": null,
                "celular": "11934906106",
                "tipo": null,
                "turnos": null
            },
            "status": null,
            "imagens": [
                {
                    "id": 0,
                    "link": "https://etradeetec.blob.core.windows.net/etrade/1926ecd7-40e1-4d9f-951d-a9b9652d75ab.jpg",
                    "base64": null
                },
                {
                    "id": 0,
                    "link": "https://etradeetec.blob.core.windows.net/etrade/e46c0519-c500-4afa-9783-26b6d215dffd.jpg",
                    "base64": null
                }
            ]
        }
    ]);
    const [turnoSelecionado, setTurno] = useState();


    // useEffect(() => {
    //     ListarProdutos();
    // }, []);

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