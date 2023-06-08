import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function PesquisarUsuario({ navigation }) {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [documentoEncontrado, setDocumentoEncontrado] = useState(null);

  if (!fontLoaded) {
    return null;
  }

  const pesquisar = async () => {
    const response = await fetch("http://192.168.0.7:8080/api/pessoa?size=200")
    const responseBody = await response.json()

    responseBody["_embedded"]["entityModelList"].forEach(e => {
      if(e["documento"] != null) {
        if(e["documento"]["numero_rg"] == numeroDocumento) {
          console.log(e)
          setDocumentoEncontrado(e)
        }
      }
    })
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/Voltar.png")} />
      </TouchableOpacity>
      <Text style={styles.titulo}>Pesquisar Usuário</Text>
      <View style={styles.linha} />
      <Text style={styles.txt}>Número do Rg</Text>
      <TextInput
        style={styles.input}
        value={numeroDocumento}
        onChangeText={(e) => setNumeroDocumento(e)}
      />
      <View style={styles.caixa}>
        {documentoEncontrado ? <>
          <Text style={styles.resultadoPesquisa}>{"Nome:" + documentoEncontrado.nomePessoa}</Text>
          <Text style={styles.resultadoPesquisa}>{"Altura:" + documentoEncontrado.valorAltura}</Text>
          <Text style={styles.resultadoPesquisa}>{"Idade:" + documentoEncontrado.valorIdade}</Text>
          <Text style={styles.resultadoPesquisa}>{"Peso:" + documentoEncontrado.valorPeso}</Text>
        </> : null}
      </View>
      <TouchableOpacity style={styles.btn} onPress={pesquisar}>
        <Text style={styles.txtBtn}>Pesquisar</Text>
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
    marginLeft: 40,
    fontSize: 32,
    fontFamily: "Rubik_700Bold",
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
    marginTop: 80,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
  },
  resultadoPesquisa: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
  },
  input: {
    width: 320,
    height: 40,
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 20,
    borderRadius: 4,
  },
  caixa: {
    marginTop: 25,
    marginLeft: 20,
    width: 320,
    height: 200,
    borderWidth: 1,
    borderRadius: 6,
  },
  txtNumDocumento: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 16,
    fontFamily: "Rubik_700Bold",
  },
  nome: {
    marginRight: 5,
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
  },
  nomeDistribuicao: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
  },
  btn: {
    marginTop: 80,
    marginLeft: 100,
    width: 180,
    height: 50,
    backgroundColor: "#53CF48",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontSize: 20,
    fontFamily: "Rubik_600SemiBold",
  },
});
