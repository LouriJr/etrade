import { useCallback } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import logo from '../../../assets/logo.png'
import Divider from '../../Components/Divider/Divider';

export default function PreCadastro({ navigation }) {

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Svg
          height="450"
          width='100%'
        >
          <Path
            d="M582.75 0.75H0.75V504.525C312.75 504.525 263.25 410.025 513 410.025H582.75V0.75Z"
            fill="#b20000"
            stroke="#b20000"
            strokeWidth="5"
            transform={`scale(${width / 580})`}
          />
        </Svg>
        <View style={styles.imageContainer}>
          <Image
            source={logo}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>E-trade</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Deseja vender também?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ color: '#fff' }}>Cadastre-se</Text>
        </TouchableOpacity>

        <Divider></Divider>

        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#fff' }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  logoText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#B20000',
    width: 300,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
});