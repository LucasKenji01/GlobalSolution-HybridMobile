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

  const pesquisar = () => {
    fetch("http://192.168.0.7:8080/api/documento/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Usuário não encontrado");
        }
        return response.json();
      })
      .then((data) => {
        setDocumentoEncontrado(data);
        if (data && data.id_pessoa) {
          // Faz a requisição para obter as informações da pessoa
          fetch("http://192.168.0.7:8080/api/pessoa/1")
            .then((response) => {
              if (!response.ok) {
                throw new Error("Informações da pessoa não encontradas");
              }
              return response.json();
            })
            .then((pessoaData) => {
              setDocumentoEncontrado((prevState) => ({
                ...prevState,
                nome: pessoaData.nome,
              }));
              if (data && data.id_centro_distribuicao) {
                // Faz a requisição para obter as informações do centro de distribuição
                fetch(
                  "http://192.168.0.7:8080/api/centrodistribuicao/1"
                )
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error(
                        "Informações do centro de distribuição não encontradas"
                      );
                    }
                    return response.json();
                  })
                  .then((centroData) => {
                    setDocumentoEncontrado((prevState) => ({
                      ...prevState,
                      nome_centro_distribuicao: centroData.nome,
                    }));
                  })
                  .catch((error) => {
                    Alert.alert("Erro", error.message);
                  });
              }
            })
            .catch((error) => {
              Alert.alert("Erro", error.message);
            });
        }
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
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
      <Text style={styles.txt}>Número do Documento</Text>
      <TextInput
        style={styles.input}
        value={numeroDocumento}
        onChangeText={(e) => setNumeroDocumento(e)}
      />
      <View style={styles.caixa}>
        {documentoEncontrado ? (
          <>
            <Text style={styles.txtNumDocumento}>
              {documentoEncontrado.numero_documento}
            </Text>
            <Text style={styles.nome}>{documentoEncontrado.nome_pessoa}</Text>
            {documentoEncontrado.nome_centro_distribuicao && (
              <Text style={styles.nomeDistribuicao}>
                Centro de distribuição: {documentoEncontrado.nome_centro_distribuicao}
              </Text>
            )}
          </>
        ) : null}
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
