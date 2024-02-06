import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";

const CustomSwiper = () => {
    return (
        <Swiper
            controlsProps={{
                prevPos: false,
                nextPos: false
            }}
        >
            <View style={[styles.slideContainer, styles.slide1]}>
                <Text>Slide 1</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide2]}>
                <Text>Slide 2</Text>
            </View>
            <View style={[styles.slideContainer, styles.slide3]}>
                <Text>Slide 3</Text>
            </View>
        </Swiper>
    );
};

export default function Produto() {
    const x = [
        'https://via.placeholder.com/80x80',
        'https://via.placeholder.com/81x81',
    ];

    return (
        <ScrollView>
            <View style={styles.container}>

                <Pressable style={styles.voltarButton}>
                    <Text>Voltar</Text>
                </Pressable>
                <View style={styles.swiper}>
                    <CustomSwiper />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productDescription}>
                        Descrição do Produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, justo sit amet cursus congue, dolor augue consectetur libero.
                    </Text>
                    <Pressable style={styles.comprarButton}>
                        <Text>Comprar</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    swiper: {
        flex: 1,
        height: 300 // Make sure to set a fixed height for the Swiper
    },
    scrollViewContent: {
        paddingBottom: 20
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
    productDetails: {
        padding: 20,
        alignItems: 'center'
    },
    productDescription: {
        marginBottom: 20,
        textAlign: 'center'
    },
    comprarButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5
    },
    voltarButton: {
        padding: 10,
        marginBottom: 10
    }
});
