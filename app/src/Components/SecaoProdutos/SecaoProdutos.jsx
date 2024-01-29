import { Text, View, StyleSheet } from "react-native";
import CardProduto from "../CardProduto/CardProduto";
import { FlatList } from "react-native-gesture-handler";


export default function SecaoProdutos({ nome, produtos }) {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{nome}</Text>
            </View>
            <FlatList
                horizontal
                data={produtos}
                keyExtractor={(produto) => produto}
                renderItem={({ item: produto }) => (
                    <View style={{
                        margin: 5,
                        overflow: 'hidden',
                        borderWidth: 0,
                        height: 165
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