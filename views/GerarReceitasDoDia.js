import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";


export default function GerarReceitasDoDia({ navigation }) {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });
  const [inputQuestion, setInputQuestion] = useState("");
  const [result, setResult] = useState("");

  if (!fontLoaded) {
    return null;
  }

  const OPENAI_API_KEY = "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";

  function sendQuestion() {
    const sQuestion = "Me dê uma receita com os seguintes alimentos: " + inputQuestion;

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: sQuestion,
        max_tokens: 2000,
        temperature: 0.5,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error?.message) {
          setResult((prevResult) => prevResult + `Error: ${json.error.message}`);
        } else if (json.choices?.[0].text) {
          const text = json.choices[0].text || "Sem resposta";
          setResult((prevResult) => prevResult + "\n\n Chat GPT: " + text);
        }
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        setInputQuestion("");
      });

    if (result) setResult((prevResult) => prevResult + "\n\n\n");

    setResult((prevResult) => prevResult + `EU: ${sQuestion}`);

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/Voltar.png")} />
      </TouchableOpacity>
      <Text style={styles.titulo}>Gerar receitas do dia</Text>
      <View style={styles.linha} />
      <Text style={styles.txt}>
        Informe os alimentos disponíveis para que a IA gere uma receita
      </Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.caixa}>
          <Text style={styles.txtChatGPT}>{result}</Text>
        </View>
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Digite os alimentos aqui"
        value={inputQuestion}
        onChangeText={setInputQuestion}
      />
      <TouchableOpacity style={styles.btn} onPress={sendQuestion}>
        <Image
          source={require("../assets/AviaoDePapel.png")}
          style={styles.image}
        />
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
    fontSize: 32,
    fontFamily: "Rubik_700Bold",
  },
  linha: {
    width: 330,
    height: 4,
    backgroundColor: "#53CF48",
    borderRadius: 5,
    marginTop: 20,
  },
  txt: {
    fontSize: 20,
    fontFamily: "Rubik_600SemiBold",
    marginTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  caixa: {
    borderWidth: 1,
    width: 330,
    minHeight: 400,
    marginTop: 15,
    borderRadius: 6,
  },
  txtChatGPT: {
    margin: 10,
    textAlign: "justify",
  },
  input: {
    borderWidth: 1,
    width: 330,
    height: 50,
    marginTop: 10,
    borderRadius: 6,
    padding: 5,
  },
  btn: {
    width: 170,
    height: 50,
    backgroundColor: "#53CF48",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginLeft: 80,
  },
  image: {
    width: 20,
    height: 20,
  },
});