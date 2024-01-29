
import { Image } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native'

export default function ProductCard() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={'https://harald.com.br/wp-content/uploads/2018/04/pao-de-mel-fofinho-700x520-1.jpg'}></Image>
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
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
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
        fontSize: '8px',
        textAlign: 'left'
    },
    price: {
        fontSize: '11px',
        fontStyle: 'bold',
        textAlign: 'left'
    }
});