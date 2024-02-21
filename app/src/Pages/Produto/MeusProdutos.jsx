import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import ListaDeProdutos from '../../Components/ListaDeProdutos/ListaDeProdutos'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '@env'
import axios from 'axios';

export default function MeusProdutos() {

    const navigation = useNavigation();

    const [produtosIndisponiveis, setProdutosIndisponiveis] = useState([]);
    const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
    const [produtosPendentes, setProdutosPendentes] = useState([]);

    useEffect(() => {
        ListarProdutos();
    }, []);

    async function ListarProdutos() {
        const response = await axios.get(API_URL + '/Produtos/ListarProdutosUsuario?idUsuario=' + 1);

        if (response.status !== 200) {
            alert('Erro ao listar produtos');
            return;
        }
        const produtosPendentes = response.data.filter(item => item.status.id === 1);
        const produtosDisponiveis = response.data.filter(item => item.status.id === 2);
        const produtosIndisponiveis = response.data.filter(item => item.status.id === 3);
        setProdutosPendentes(produtosPendentes);
        setProdutosDisponiveis(produtosDisponiveis);
        setProdutosIndisponiveis(produtosIndisponiveis);
    }

    return (
        <View>
            <GestureHandlerRootView>
                <PanGestureHandler>
                    <ScrollView nestedScrollEnabled={false} contentContainerStyle={styles.container}>
                        <View style={styles.titleContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroProduto")}>
                                <FontAwesomeIcon icon={faPlus} style={{ color: '#fff' }} size={24} />
                            </TouchableOpacity>
                            <Text style={styles.title}>
                                Meus Produtos
                            </Text>
                        </View>
                        <View >
                            <Text style={styles.sectionText}>Disponíveis</Text>
                            <ListaDeProdutos produtos={produtosDisponiveis}></ListaDeProdutos>
                        </View>

                        <View>
                            <Text style={styles.sectionText}>Pendentes</Text>
                            <ListaDeProdutos produtos={produtosPendentes}></ListaDeProdutos>
                        </View>

                        <View>
                            <Text style={styles.sectionText}>Indisponíveis</Text>
                            <ListaDeProdutos produtos={produtosIndisponiveis}></ListaDeProdutos>
                        </View>
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
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
    },
    sectionText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 10
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