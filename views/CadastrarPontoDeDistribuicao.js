import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function CadastrarPontoDeDistribuicao({ navigation }) {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  const [nome, setNome] = useState("");
  const [quantidadeVagas, setQuantidadeVagas] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  if (!fontLoaded) {
    return null;
  }

  const cadastrarPonto = async () => {
    const ponto = {
      nome_centro_distribuicao: nome,
      numero_vagas: quantidadeVagas,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ponto),
    };

    try {
      const response = await fetch("http://192.168.0.7:8080/api/centrodistribuicao", requestOptions)
      
      if(response.status != 201) {
        Alert.alert("Erro", "Nao foi possivel fazer o cadastro tente novamente");
      } else {
        const responseBody = await response.json(); 
        const id = responseBody["id"]
        cadastrarEndereco(id)
      }
    } catch (error) {
      console.error("Erro na requisição:", error)
    }
  };

  const cadastrarEndereco = async (idCentroDistribuicao) => {
    const endereco = {
      nome_logradouro: logradouro,
      numero_logradouro: numero,
      numero_cep: cep,
      nome_cidade: cidade,
      nome_estado: estado,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(endereco),
    };

    try {
      const response = await fetch("http://192.168.0.7:8080/api/endereco", requestOptions)
      
      if(response.status != 201) {
        Alert.alert("Erro", "Nao foi possivel fazer o cadastro tente novamente");
      } else {
        const responseBody = await response.json(); 
        
        endereco["id"] = responseBody["id"]

        const responseFromAddingCentro = await fetch(`http://192.168.0.7:8080/api/centrodistribuicao/${idCentroDistribuicao}/endereco`, requestOptions)

        if(response.status != 201) {
          Alert.alert("Erro", "Nao foi possivel fazer o cadastro tente novamente");
        } else {
          setCep("")
          setNome("")
          setCidade("")
          setLogradouro("")
          setNumero("")
          setQuantidadeVagas("")
          setEstado("")
          alert("Cadastrado com sucesso!")
        }
      }

    } catch (error) {
      console.error("Erro na requisição:", error)
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/Voltar.png")} />
      </TouchableOpacity>
      <Text style={styles.titulo}>
        Cadastrar Novo Ponto de Distribuição
      </Text>
      <View style={styles.linha} />
      <Text style={styles.txt}>Nome do Ponto de Distribuição</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Text style={styles.txt}>Quantidade de vagas disponíveis</Text>
      <TextInput
        style={styles.input}
        value={quantidadeVagas}
        onChangeText={(text) => setQuantidadeVagas(text)}
      />
      <Text style={styles.txt}>Logradouro</Text>
      <TextInput
        style={styles.input}
        value={logradouro}
        onChangeText={(text) => setLogradouro(text)}
      />
      <Text style={styles.txt}>Número</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />
      <Text style={styles.txt}>CEP</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(text) => setCep(text)}
      />
      <Text style={styles.txt}>Cidade</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={(text) => setCidade(text)}
      />
      <Text style={styles.txt}>Estado</Text>
      <TextInput
        style={styles.input}
        value={estado}
        onChangeText={(text) => setEstado(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={cadastrarPonto}>
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
    marginLeft: 20,
    marginRight: 20,
  },
  titulo: {
    marginTop: 20,
    fontSize: 32,
    fontFamily: "Rubik_700Bold",
    textAlign: "center",
  },
  linha: {
    width: 330,
    height: 4,
    backgroundColor: "#53CF48",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
  },
  txt: {
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    marginTop: 10,
    marginLeft: 20,
  },
  input: {
    width: 320,
    height: 40,
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 20,
    borderRadius: 4,
  },
  btn: {
    marginTop: 30,
    marginLeft: 100,
    width: 180,
    height: 50,
    backgroundColor: "#53CF48",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txtBtn: {
    fontSize: 20,
    fontFamily: "Rubik_600SemiBold",
  },
});