import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useFonts, Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold } from "@expo-google-fonts/rubik";

export default function CadastroUsuario({ navigation }) {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  if (!fontLoaded) {
    return null;
  }

  const cadastrarUsuario = () => {
    const usuario = {
      numero_rg: rg,
      numero_cpf: cpf,
      nomePessoa: nome,
      valorAltura: altura,
      valorPeso: peso,
      valorIdade: idade,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };

    Promise.all([
      fetch("http://192.168.0.7:8080/api/documento", requestOptions),
      fetch("http://192.168.0.7:8080/api/pessoa", requestOptions),
    ])
      .then((responses) => {
        // Processar as respostas das duas requisições
        const promises = responses.map((response) => response.json());
        return Promise.all(promises);
      })
      .then((data) => {
        console.log(data)
        const pessoaId = data[1]["id"]
        const documento = {
          "id": data[0]["id"],
          "numero_cpf": data[0]["numero_cpf"],
          "numero_rg": data[0]["numero_rg"]
        }

        fetch(`http://192.168.0.7:8080/api/pessoa/${pessoaId}/documento`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(documento),
        }).then(response => {
          if(response.status != 201) {
            alert("Nao foi possivel realizar o cadastro, tente novamente")
          } else {
            setRg("")
            setCpf("")
            setNome("")
            setIdade("")
            setAltura("")
            setPeso("")
            alert("Cadastro realizado com sucesso!")
          }
        })
      })
      .catch((error) => {
        console.log("Erro na requisição:", error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Image source={require("../assets/Voltar.png")} />
      </TouchableOpacity>
      <Text style={styles.titulo}>Cadastro Usuário</Text>
      <View style={styles.linha} />
      <View style={styles.forms}>
        <Text style={styles.txtCpf}>CPF</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={(e) => setCpf(e)} />
        <Text style={styles.txtRg}>RG</Text>
        <TextInput style={styles.input} value={rg} onChangeText={(e) => setRg(e)} />
        <Text style={styles.txtNome}>Nome</Text>
        <TextInput style={styles.input} value={nome} onChangeText={(e) => setNome(e)} />
        <Text style={styles.txtIdade}>Idade</Text>
        <TextInput style={styles.input} value={idade} onChangeText={(e) => setIdade(e)} />
        <Text style={styles.txtAltura}>Altura</Text>
        <TextInput style={styles.input} value={altura} onChangeText={(e) => setAltura(e)} />
        <Text style={styles.txtPeso}>Peso</Text>
        <TextInput style={styles.input} value={peso} onChangeText={(e) => setPeso(e)} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={cadastrarUsuario}>
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
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
        marginTop: 20,
        marginLeft: 15,
    },
    txtNome: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 30,
    },
    txtCpf: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 20
    },
    txtRg: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 20
    },
    txtIdade: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 20
    },
    txtAltura: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 20
    },
    txtPeso: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 20
    },
    input: {
        marginTop: 5,
        width: 300,
        height: 40,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 4,
    },
    btn: {
        marginTop: 40,
        backgroundColor: '#53CF48',
        width: 180,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 70,
        borderRadius: 6,
    },
    txtBtn: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold',
    }

})