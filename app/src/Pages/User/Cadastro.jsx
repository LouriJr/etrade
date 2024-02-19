import React, { useState } from 'react';
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInputMask } from 'react-native-masked-text';
import logo from '../../../assets/logoVermelho.png'
import TurnosSelector from '../../Components/FiltroTurno/TurnosSelector';
import { SuccessMessage, ErrorMessage } from '../../Services/ToastService';
import axios from 'axios';
import { API_URL } from '@env'
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [confirmacaoEmail, setConfirmacaoEmail] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [turnos, setTurnos] = useState([]);

    const navigation = useNavigation();

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function limparMascaraNumeroCelular(numero) {
        return numero.replace(/\D/g, '');
    }

    function validarNumeroCelular(numero) {
        const numeroSemFormatacao = limparMascaraNumeroCelular(numero);
        const regex = /^[0-9]{11}$/;

        return regex.test(numeroSemFormatacao);
    }

    function converterTurnos(turnos) {
        return turnos.map(turno => {
            switch (turno) {
                case 'Manhã':
                    return { id: 1 };
                case 'Tarde':
                    return { id: 2 };
                case 'Noite':
                    return { id: 3 };
                default:
                    return null;
            }
        });
    }

    async function cadastrar() {
        if (validarEmail(email) === false) {
            ErrorMessage("Erro ao cadastrar - E-mail inválido", "Ops! Parece que o e-mail preenchido é inválido.\r\nVerifique e tente novamente.");
            return;
        }


        if (email !== confirmacaoEmail || !confirmacaoEmail) {
            ErrorMessage("Erro ao cadastrar - E-mail inválido", "Ops! Parece que os e-mails não coincidem. Verifique e tente novamente.");
            return;
        }

        if (senha !== confirmacaoSenha || !senha || !confirmacaoSenha) {
            ErrorMessage("Erro ao cadastrar - Senha inválida", "Ops! Parece que as senhas não coincidem ou são inválidas. Verifique e tente novamente.");
            return;
        }

        if (!nome) {
            ErrorMessage("Erro ao cadastrar - Nome inválido", "Parece que o campo de nome não foi preenchido. Verifique e tente novamente.");
            return;
        }

        if (!celular || validarNumeroCelular(celular) === false) {
            ErrorMessage("Erro ao cadastrar - Telefone inválido", "O campo de celular não foi preenchido ou é inválido. Verifique e tente novamente.");
            return;
        }

        if (turnos.length < 1) {
            ErrorMessage("Erro ao cadastrar - Turnos inválidos", "Selecione ao menos um turno que você está disponível");
            return;
        }

        try {
            const body = {
                nome,
                email,
                senha,
                celular: limparMascaraNumeroCelular(celular),
                turnos: converterTurnos(turnos),
                tipo: {
                    id: 2
                }
            }

            await axios.post(API_URL + '/Usuarios/Cadastrar', body);
            SuccessMessage("Cadastrado com sucesso!", `Faça login para anunciar e vender!`);
            navigation.navigate('Login');
        }
        catch (error) {
            if (error.response?.status === 409) {
                ErrorMessage("Erro ao cadastrar", "Parece que este e-mail ou telefone já está cadastrado");
                return;
            }
            ErrorMessage("Erro ao cadastrar", "Ops! Parece que houve um erro ao cadastrar.\r\nTente novamente mais tarde.");
        }
    }


    return (
        <KeyboardAwareScrollView>
            <View style={styles.inner}>

                <View style={styles.form}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Divulgue e venda na ETEC
                        </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmação de e-mail"
                        value={confirmacaoEmail}
                        onChangeText={setConfirmacaoEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme a senha"
                        value={confirmacaoSenha}
                        onChangeText={setConfirmacaoSenha}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInputMask
                        style={styles.input}
                        placeholder="Celular"
                        value={celular}
                        onChangeText={setCelular}
                        keyboardType="phone-pad"
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                        }}
                    />
                    <View>
                        <Text>Turnos disponíveis: </Text>
                        <TurnosSelector turnosSelecionados={turnos} setTurnos={setTurnos}></TurnosSelector>
                    </View>
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.button} onPress={cadastrar}>
                            <Text style={{ color: '#fff' }}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "100%"
    },
    inner: {
        padding: 15,
        flex: 1,
    },
    form: {
        backgroundColor: "#fff",
        padding: 35,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 160,
        height: 130,
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#B20000',
        width: 300,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
});