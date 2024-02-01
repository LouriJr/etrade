import React from 'react'
import { Pressable, View, Text } from 'react-native'
import SecaoProdutos from '../../Components/SecaoProdutos/SecaoProdutos'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import HomeImage from '../../Components/HomeImage/HomeImage';

export default function Home({ navigation }) {

    return (
        <View>
            <PanGestureHandler>
                <ScrollView nestedScrollEnabled={false}>
                    <HomeImage></HomeImage>
                    <SecaoProdutos></SecaoProdutos>
                    <Pressable onPress={() => navigation.navigate('Abacaxi')} >
                        <Text>Ir para a pag Abacaxi papapalmeiras</Text>
                    </Pressable>
                </ScrollView>
            </PanGestureHandler>
        </View>
    )
}
