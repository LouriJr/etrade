import React, { useState } from 'react';
import { Dimensions, View, Image, TextInput, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import logo from '../../../assets/logoVermelho.png';
import Svg, { Path } from 'react-native-svg';
import { SalvarJWT } from "../../Services/AuthService";
import { ErrorMessage } from '../../Services/ToastService';
import axios from 'axios';
import { API_URL } from '@env'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    const { width } = Dimensions.get('window');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function realizarLogin() {
        const body = new URLSearchParams({
            email,
            senha,
        });
        try {
            const respostaLogin = await axios.post(API_URL + '/Usuarios/Login', body);
            await SalvarJWT(respostaLogin.data.token);
            navigation.replace('MeusProdutos');
        } catch (error) {
            if (error.response?.status === 401) {
                ErrorMessage("Erro ao realizar login", "E-mail e/ou senha inválidos!");
                return;
            }
            ErrorMessage("Erro ao realizar login", "Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
        }
    };

    return (
        <View>
            <View style={styles.header}>
                <Svg
                    height="100"
                    width='100%'
                >
                    <Path
                        d="M 387.661 -0.452 L -0.407 -0.452 L -0.746 73.22 C 207.254 73.22 174.661 12.915 341.161 12.915 L 387.661 12.915 L 387.661 -0.452 Z"
                        fill="#b20000"
                        stroke="#b20000"
                        strokeWidth="5"
                        transform={`scale(${width / 380})`}
                    />
                </Svg>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.container}>

                    <View style={styles.loginContainer}>
                        <View style={styles.content}>
                            <View>
                                <Image source={logo} style={styles.logo} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>
                                    Divulgue e venda na ETEC
                                </Text>
                            </View>
                            <View style={styles.form}>
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType="email-address"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Senha"
                                        value={senha}
                                        onChangeText={setSenha}
                                        secureTextEntry={true}
                                    />
                                </View>
                                <TouchableOpacity style={styles.button} onPress={realizarLogin}>
                                    <Text style={{ color: '#fff' }}>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.registerTextContainer}>
                        <Text style={styles.registerText}>Não tem uma conta? <Text style={{ color: "#b20" }} onPress={() => navigation.navigate('Cadastro')}> Registre-se</Text>
                        </Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    loginContainer: {
        flex: 1,
        height: '100%',
        paddingTop: '8%',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        backgroundColor: "#fff",
        width: "90%",
        padding: 35,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    header: {
        width: "100%",
    },
    logo: {
        width: 200,
        height: 170,
        marginTop: 20,
        marginBottom: 30,
        resizeMode: 'stretch',
    },
    textContainer: {
        width: '100%',
        marginBottom: 30,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
    },
    input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#B20000',
        width: 300,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    registerTextContainer: {
        alignItems: 'center'
    },
    registerText: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '400',
    },
});