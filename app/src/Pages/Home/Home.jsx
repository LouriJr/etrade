import React from 'react'
import { View } from 'react-native'
import SecaoProdutos from '../../Components/SecaoProdutos/SecaoProdutos'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import HomeImage from '../../Components/HomeImage/HomeImage';

export default function Home() {
    const produtos = [1, 2, 3, 4, 5, 6, 7];

    return (
        <View>
            <PanGestureHandler>
                <ScrollView nestedScrollEnabled={false}>
                    <HomeImage></HomeImage>
                    <SecaoProdutos nome="Ofertas do dia" produtos={produtos}>
                    </SecaoProdutos>
                    <SecaoProdutos nome="Ofertas do dia" produtos={produtos}>
                    </SecaoProdutos>
                    <SecaoProdutos nome="Ofertas do dia" produtos={produtos}>
                    </SecaoProdutos>
                    <SecaoProdutos nome="Ofertas do dia" produtos={produtos}>
                    </SecaoProdutos>
                    <SecaoProdutos nome="Ofertas do dia" produtos={produtos}>
                    </SecaoProdutos>
                </ScrollView>
            </PanGestureHandler>

        </View>
    )
}
