import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/Login';
import CadastroFuncionarioScreen from './views/CadastroFuncionario';
import HomeScreen from './views/Home';
import CadastroUsuarioScreen from './views/CadastroUsuario';
import DoacaoScreen from './views/Doacao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadastroFuncionario" component={CadastroFuncionarioScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="Doacao" component={DoacaoScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


