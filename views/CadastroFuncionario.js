import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";
import React, { useState } from "react";

export default function CadastroFuncionario({navigation}){

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
      });
    
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");

      if (!fontLoaded) {
        return null;
      }

      

      const cadastrarLogin = () => {
        const login ={
            descricao_email: email,
            descricao_senha: senha
        };

        fetch("http://192.168.0.7:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        .then(response => response.json())
        .then(data => {
            navigation.goBack();

        setTimeout(() => {
          alert("Cadastro realizado com sucesso!");
        }, 100);
        console.log("Resposta da API:", data);
      })
        .catch(error => {
            console.log("Erro na requisição:", error)
        })
      }




    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/Voltar.png')}/>
            </TouchableOpacity>
            <Text style={styles.titulo}>Cadastro</Text>
            <View style={styles.linha}/>
            <View style={styles.forms}>
                <Text style={styles.textoEmail}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)}/>
                <Text style={styles.textoSenha}>Senha</Text>
                <TextInput style={styles.input} value={senha} onChangeText={text => setSenha(text)}/>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn} onPress={cadastrarLogin}>
                    <Text style={styles.textoBtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
    },
    titulo: {
        marginTop: 20,
        fontSize: 36,
        fontFamily: "Rubik_700Bold",
    },
    linha: {
        width: 330,
        height: 4,
        backgroundColor: "#53CF48",
        borderRadius: 5,
        marginTop: 20,
    },
    forms: {
        marginTop: 65,
        marginLeft: 15,
    },
    textoEmail: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 30,
    },
    textoSenha: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 30,
    },
    input: {
        marginTop: 5,
        width: 300,
        height: 40,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 4,
    },
    containerBtn: {
        marginTop: 40,
        alignItems: "center",
    },
    btn: {
        width: 180,
        height: 50,
        backgroundColor: "#53CF48",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    textoBtn: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold',
    }
})