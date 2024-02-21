
import { Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardProduto({ produto }) {
    const navigation = useNavigation();
    console.log(produto);

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Produto', { produto })}>
            <View style={styles.imageContainer}>
                {/* <Image style={styles.image} source={{
                    uri: produto.imagens[0]?.link ?? "",
                }}></Image> */}
            </View>

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{produto.nome}</Text>
                    {produto.usuario?.nome &&
                        <Text style={styles.seller}>{produto.usuario.nome}</Text>
                    }
                </View>
                <View style={styles.footer}>
                    <Text style={styles.price}>R$ 4,00</Text >
                </View>
            </View>
        </TouchableOpacity >
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
        justifyContent: 'space-between',
        marginTop: 15
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
        fontSize: 18,
        fontWeight: '600'
    },
    seller: {
        fontSize: 14,
        fontWeight: '500'
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