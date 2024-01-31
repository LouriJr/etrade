
import { Image } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function CardProduto({produto}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{
                    uri: 'https://harald.com.br/wp-content/uploads/2018/04/pao-de-mel-fofinho-700x520-1.jpg',
                }}></Image>
            </View>

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{produto.nome}</Text>
                    <Text style={styles.seller}>{produto.usuario.nome}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.price}>R$ 4,00</Text >
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 16,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 110,
        borderRadius: 10,
    },
    content: {
        height: 100,
        width: '70%',
        marginLeft: 10,
        justifyContent: 'space-between',
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: '500'
    },
    seller: {
        fontSize: 12,
        fontWeight: '450'
    },
    footer: {
        display: 'flex',
        marginRight: 10,
        flexDirection: 'row-reverse'
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'left'
    }
});