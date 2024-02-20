import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreCadastro from './PreCadastro';
import Cadastro from './Cadastro';
import Login from './Login';
import CadastroProduto from '../Produto/CadastroProduto';
import MeusProdutos from '../Produto/MeusProdutos';
import { ChecarLoginUsuario } from "../../Services/AuthService";


const Stack = createStackNavigator();

export default function UserStackNavigation() {
    const [usuarioLogado, setUsuarioLogado] = useState(false);

    useEffect(() => {
        verificarLogin();
    }, []);

    async function verificarLogin() {
        const tokenExiste = await ChecarLoginUsuario();
        setUsuarioLogado(tokenExiste);
    }

    return (
        <Stack.Navigator>
            {!usuarioLogado &&
                <Stack.Screen
                    name="PreCadastro"
                    component={PreCadastro}
                    options={{ headerShown: false }}
                />
            }
            {!usuarioLogado &&
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
            }
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MeusProdutos"
                component={MeusProdutos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroProduto"
                component={CadastroProduto}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    )
}
