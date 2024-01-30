import { Text, View, StyleSheet } from "react-native";
import CardProduto from "../CardProduto/CardProduto";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { useEffect, useState } from "react";


export default function SecaoProdutos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        ListarProdutos();
    }, []);

    async function ListarProdutos() {
        const response = await axios.get('https://localhost:44361/api/Produtos/ListarPorTurno?turno=2');

        if (response.status !== 200) {
            alert('Erro ao listar produtos');
            return;
        }

        setProdutos(response.data);
    }

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Filtro</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={({ item: produto }) => (
                    <View style={{
                        margin: 5,
                        overflow: 'hidden',
                        borderWidth: 0,
                        height: 135
                    }}>
                        <View>
                            <CardProduto produto={produto}></CardProduto>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 8
    },
    title: {
        fontFamily: "",
        fontSize: 18,
        fontWeight: '500',
    }
});