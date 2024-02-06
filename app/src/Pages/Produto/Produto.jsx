import React from 'react';
import { Text, Dimensions, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];


export default function Produto() {
    return (

        <ScrollView>
            <View style={styles.container}>

                <Pressable style={styles.voltarButton}>
                    <Text>Voltar</Text>
                </Pressable>
                <View style={styles.swiper}>
                    <SwiperFlatList
                        index={0}
                        showPagination
                        paginationStyleItem={{ width: 10, height: 10, borderRadius: 5 }}
                        data={colors}
                        renderItem={({ item }) => (
                            <View style={[styles.child, { backgroundColor: item }]}>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productDescription}>
                        Descrição do Produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, justo sit amet cursus congue, dolor augue consectetur libero.
                    </Text>
                    <Pressable style={styles.comprarButton}>
                        <Text>Comprar</Text>
                    </Pressable>
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productDescription}>
                        Descrição do Produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, justo sit amet cursus congue, dolor augue consectetur libero.
                    </Text>
                    <Pressable style={styles.comprarButton}>
                        <Text>Comprar</Text>
                    </Pressable>
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
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});