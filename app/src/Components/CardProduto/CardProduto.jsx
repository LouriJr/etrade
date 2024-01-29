
import { Image } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function CardProduto() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{
                    uri: 'https://harald.com.br/wp-content/uploads/2018/04/pao-de-mel-fofinho-700x520-1.jpg',
                }}></Image>
            </View>

            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Pão de mel recheado com cobertura de chocolate</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.price}>R$ 4,00</Text >
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        width: 120,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
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

    textContainer: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5

    },
    text: {
        fontSize: 8,
        textAlign: 'left'
    },
    price: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'left'
    }
});