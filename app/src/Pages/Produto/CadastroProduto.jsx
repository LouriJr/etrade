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
import logo from '../../../assets/logoVermelho.png'
import CurrencyInput from 'react-native-currency-input';
import * as ImagePicker from 'expo-image-picker';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import axios from 'axios';
import { API_URL } from '@env'
import { SuccessMessage, ErrorMessage } from '../../Services/ToastService';
import { useNavigation } from '@react-navigation/native';

export default function CadastroProduto() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [imagens, setImagens] = useState([]);

    async function cadastrar() {

        if (imagens.length < 1) {
            ErrorMessage("Erro ao cadastrar", "Selecione ao menos uma imagem para seu produto!");
            return;
        }
        if (!nome) {
            ErrorMessage("Erro ao cadastrar - Nome inválido", "Parece que o campo de nome não foi preenchido. Verifique e tente novamente.");
            return;
        }
        if (!valor || valor <= 0) {
            ErrorMessage("Erro ao cadastrar - Valor inválido", "Parece que o campo de valor preenchido é inválido. Verifique e tente novamente.");
            return;
        }
        if (!descricao) {
            ErrorMessage("Erro ao cadastrar - Descrição inválida", "Parece que o campo de descrição não foi preenchido. Verifique e tente novamente.");
            return;
        }

        try {

            const body = {
                nome,
                descricao,
                valor,
                imagens,
                usuario: {
                    id: 1
                }
            }

            await axios.post(API_URL + '/Produtos/Cadastrar', body);
            SuccessMessage("Cadastrado com sucesso!", `Faça login para anunciar e vender!`);
            navigation.navigate('MeusProdutos');
        } catch (error) {
            ErrorMessage("Erro ao cadastrar", "Ops! Parece que houve um erro ao cadastrar.\r\nTente novamente mais tarde.");
        }
    }

    async function selecionarImagem() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsMultipleSelection: true
        });

        if (result.canceled) {
            return;
        }
        let listaDeImagens = [];

        result.assets.forEach(imagem => {
            listaDeImagens.push({ base64: imagem.uri })
        });
        setImagens(listaDeImagens);
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.inner}>

                <View style={styles.form}>
                    {imagens.length === 0 &&
                        <View>
                            <View style={styles.logoContainer}>
                                <Image source={logo} style={styles.logo} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>
                                    Divulgue e venda na ETEC
                                </Text>
                            </View>
                        </View>
                    }
                    {imagens.length > 0 &&
                        <View style={styles.imageSliderContainer}>
                            <ImageSlider images={imagens}></ImageSlider>
                        </View>
                    }

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={selecionarImagem}>
                            <Text style={{ color: '#fff' }}>Selecionar imagens</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <CurrencyInput
                        placeholder="Valor do produto"
                        style={styles.input}
                        value={valor}
                        prefix="R$"
                        delimiter="."
                        separator=","
                        precision={2}
                        onChangeValue={setValor}
                    />
                    <TextInput
                        style={[styles.input, styles.multilineInput]}
                        placeholder="Descrição do produto"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline={true}
                    />
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
        alignItems: 'center'
    },
    imageSliderContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    inner: {
        padding: 24,
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
        alignItems: 'center',
        marginBottom: 20
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