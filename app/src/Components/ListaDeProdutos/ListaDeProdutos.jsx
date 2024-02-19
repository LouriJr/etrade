import { View, StyleSheet } from "react-native";
import CardProduto from "../CardProduto/CardProduto";

export default function ListaDeProdutos({ produtos }) {
    return (
        <View>
            <View style={styles.productsContainer} >
                {
                    produtos.map((produto, index) => (
                        <CardProduto key={index} produto={produto}></CardProduto>
                    ))
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    productsContainer: {

    }
});