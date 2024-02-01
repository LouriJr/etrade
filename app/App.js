import { View } from 'react-native';
import Header from './src/Components/Header/Header';
import Home from './src/Pages/Home/Home';
import PreCadastro from './src/Pages/PreCadastro/PreCadastro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import HomeStackNavigation from './src/Pages/Home/HomeStackNavigation';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Header></Header>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBarOptions={{
            activeTintColor: '#B20000',
            inactiveTintColor: 'gray',
            labelStyle: { display: 'none' },
            style: { borderTopWidth: 0 },
          }}>
          <Tab.Screen name="Home" component={HomeStackNavigation} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="PreCadastro" component={PreCadastro} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

