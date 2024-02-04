import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function Produto({ produto, navigation }) {
    const x = ['https://via.placeholder.com/200x140', 'https://via.placeholder.com/200x140'];

    const handleVoltarPress = () => {
        // Adicione lógica para voltar à tela anterior
        navigation.goBack();
    };

    const handleComprarPress = () => {
        // Adicione lógica para processar a compra
        console.log('Produto comprado!');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.voltarButton} onPress={handleVoltarPress}>
                <Text>Voltar</Text>
            </TouchableOpacity>

            <ScrollView style={styles.scrollView}>
                {/* Carrossel de Fotos */}
                <View style={styles.carouselContainer}>
                    <Carousel style={styles.carousel}>
                        {x.map((imagem, index) => (
                            <Image key={index} source={{ uri: imagem }} style={styles.carouselImage} />
                        ))}
                    </Carousel>
                </View>

                {/* Botão Comprar */}
                <TouchableOpacity style={styles.comprarButton} onPress={handleComprarPress}>
                    <Text>Comprar</Text>
                </TouchableOpacity>

                {/* Descrição do Produto */}
                <Text style={styles.text}>Desc</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselContainer: {
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: 16,
    },
    voltarButton: {
        position: 'absolute',
        top: 16,
        left: 16,
        padding: 8,
    },
    comprarButton: {
        marginTop: 16,
        backgroundColor: 'green', // Cor de fundo do botão comprar
        padding: 12,
        alignItems: 'center',
    },
    text: {
        marginTop: 16,
    },
    carousel: {
        flex: 1,
    },
    carouselImage: {
        flex: 1,
        width: '100%',
    },
});