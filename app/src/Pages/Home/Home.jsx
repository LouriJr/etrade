import React from 'react'
import { View } from 'react-native'
import SecaoProdutos from '../../Components/SecaoProdutos/SecaoProdutos'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import HomeImage from '../../Components/HomeImage/HomeImage';

export default function Home() {

    return (
        <View>
            <PanGestureHandler>
                <ScrollView nestedScrollEnabled={false}>
                    <HomeImage></HomeImage>
                    <SecaoProdutos></SecaoProdutos>
                </ScrollView>
            </PanGestureHandler>
        </View>
    )
}
