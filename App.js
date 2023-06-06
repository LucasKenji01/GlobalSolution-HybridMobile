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
import ExibirPontosDeDistribuicaoScreen from './views/ExibirPontosDeDistribuicao';
import CadastrarPontoDeDistribuicaoScreen from './views/CadastrarPontoDeDistribuicao';
import PesquisarUsuarioScreen from './views/PesquisarUsuario';
import GerarReceitasDoDiaScreen from './views/GerarReceitasDoDia';
import CadastrarReceitasDoDiaScreen from './views/CadastrarReceitasDoDia';



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
        <Stack.Screen name="ExibirPontosDeDistribuicao" component={ExibirPontosDeDistribuicaoScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadastrarPontoDeDistribuicao" component={CadastrarPontoDeDistribuicaoScreen} options={{
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
        <Stack.Screen name="PesquisarUsuario" component={PesquisarUsuarioScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="Doacoes" component={DoacoesScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="GerarReceitasDoDia" component={GerarReceitasDoDiaScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadastrarReceitasDoDia" component={CadastrarReceitasDoDiaScreen} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


