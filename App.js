import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/Login';
import CadastroFuncionarioScreen from './views/CadastroFuncionario';
import HomeScreen from './views/Home';
import CadastroUsuarioScreen1 from './views/CadastroUsuario1';
import CadastroUsuarioScreen2 from './views/CadastroUsuario2';
import CadastroUsuarioScreen3 from './views/CadastroUsuario3';
import DoacoesScreen from './views/Doacoes';
import DoacaoFinanceiraScreen from './views/DoacaoFinanceira';
import DoacaoAlimentosScreen from './views/DoacaoAlimentos';


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
        <Stack.Screen name="CadastroUsuario1" component={CadastroUsuarioScreen1} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadastroUsuario2" component={CadastroUsuarioScreen2} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadastroUsuario3" component={CadastroUsuarioScreen3} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="Doacoes" component={DoacoesScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="DoacaoFinanceira" component={DoacaoFinanceiraScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="DoacaoAlimentos" component={DoacaoAlimentosScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


