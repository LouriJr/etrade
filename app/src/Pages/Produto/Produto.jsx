import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Divider from '../../Components/Divider/Divider';

export default function Produto({ route }) {
    const produto = route.params.produto;

    function abrirWhatsapp() {
        Linking.canOpenURL("whatsapp://send").then(supported => {
            if (supported) {
                return Linking.openURL(
                    `whatsapp://send?phone=55${produto.usuario.celular}`
                );
            } else {
                return Linking.openURL(
                    `https://api.whatsapp.com/send?phone=55${produto.usuario.celular}`
                );
            }
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {produto.nome}
                </Text>
            </View>
            <ImageSlider images={produto.imagens} />

            <View style={styles.priceContainer}>
                <Text style={styles.price}>
                    R$ {produto.valor}
                </Text>
                <Text style={styles.sellerText}>
                    Vendido por <Text style={styles.seller}>{produto.usuario.nome}</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={abrirWhatsapp}>
                <Text style={{ color: '#fff' }}>Falar com o Vendedor</Text>
            </TouchableOpacity>
            <Divider></Divider>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Descrição</Text>
                <Text style={styles.description}>
                    {produto.descricao}
                </Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: "100%",
        flex: 1,
        alignItems: 'center',
        paddingTop: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    titleContainer: {
        alignItems: "flex-start",
        width: '100%',
        paddingLeft: 10
    },
    title: {
        margin: 10,
        fontSize: 20,
        fontWeight: '500'
    },
    priceContainer: {
        alignItems: "flex-start",
        width: "100%",
        paddingLeft: '5%'
    },
    price: {
        fontSize: 30,
        fontWeight: '500'
    },
    sellerText: {
        fontSize: 15,
        fontWeight: '400'
    },
    seller: {
        fontSize: 15,
        fontWeight: '600',
        color: '#b20000',
    },
    button: {
        backgroundColor: '#B20000',
        width: 300,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    descriptionContainer: {
        alignItems: "flex-start",
        marginTop: 20,
        fontSize: 20,
        width: '100%',
        paddingLeft: '5%'
    },
    descriptionTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
    },
    description: {
        width: '100%',
        fontSize: 18,
        marginTop: 10,
        flex: 1,
        flexWrap: 'wrap'
    }
});