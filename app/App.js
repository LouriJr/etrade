
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/Components/Header/Header';
import Home from './src/Pages/Home/Home';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Header></Header>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>

        <View style={styles.footer}>
          <Text>Meu Rodapé</Text>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
