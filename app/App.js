import { View } from 'react-native';
import Header from './src/Components/Header/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import HomeStackNavigation from './src/Pages/Home/HomeStackNavigation';
import UserStackNavigation from './src/Pages/User/UserStackNavigation';
import Toast, { ErrorToast } from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

export default function App() {
  const toastConfig = {
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 15
        }}
        text2Style={{
          fontSize: 13
        }}
        text2NumberOfLines={2}
        style={{borderLeftColor: "red"}}
      />
    )
  }
  return (
    <>
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
            <Tab.Screen name="HomeStack" component={HomeStackNavigation} options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faHome} color={color} size={size} />
              ),
            }} />
            <Tab.Screen name="UserStack" component={UserStackNavigation} options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faUser} color={color} size={size} />
              ),
            }} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </>
  );
}

