import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import ListaDeProdutos from '../../Components/ListaDeProdutos/ListaDeProdutos'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

export default function MeusProdutos() {

    const navigation = useNavigation();

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

    return (
        <View>
            <GestureHandlerRootView>
                <PanGestureHandler>
                    <ScrollView nestedScrollEnabled={false} contentContainerStyle={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroProduto")}>
                            <FontAwesomeIcon icon={faPlus} style={{ color: '#fff' }} size={24} />
                        </TouchableOpacity>
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
    buttonContainer: {
        width: "100%",
        backgroundColor: "#129012",
        height: 45,
    },
    button: {
        width: 45,
        height: 45,
        backgroundColor: "#b20",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    }
});