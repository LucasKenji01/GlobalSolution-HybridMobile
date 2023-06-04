import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function ExibirPontosDeDistribuicao({ navigation }) {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/Voltar.png")} />
      </TouchableOpacity>
      <Text style={styles.titulo}>Pontos de Distribuição</Text>
      <View style={styles.linha} />
      <View style={styles.lista}>
        <View style={styles.card}>
            <Text style={styles.subtitulo} for="cardPressionado">• Ponto 1</Text>
            <Text style={styles.txt}>Vagas disponíveis: 30</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitulo} for="cardPressionado">• Ponto 2</Text>
            <Text style={styles.txt}>Vagas disponíveis: 30</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitulo} for="cardPressionado">• Ponto 3</Text>
            <Text style={styles.txt}>Vagas disponíveis: 30</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitulo} for="cardPressionado">• Ponto 4</Text>
            <Text style={styles.txt}>Vagas disponíveis: 30</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitulo} for="cardPressionado">• Ponto 5</Text>
            <Text style={styles.txt}>Vagas disponíveis: 30</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.txtVoltar}>Voltar</Text>
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
  },
  linha: {
    width: 330,
    height: 4,
    backgroundColor: "#53CF48",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
  },
  lista: {
    marginTop: 30,
    marginLeft: 20,
    width: 340,
    height: 520,
    borderWidth: 1,
    borderRadius: 6,
  },
  card: {
    marginTop: 2,
    marginLeft: 2,
    width: 334,
    height: 90,
    borderWidth: 2,
    borderColor: "#53CF48",
    borderRadius: 6,
  },
  subtitulo: {
    fontSize: 20,
    fontFamily: "Rubik_600SemiBold",
    marginTop: 20,
    marginLeft: 15,
  },
  txt: {
    fontSize: 14,
    fontFamily: "Rubik_400Regular",
    marginTop: 10,
    marginLeft: 50,
  },
  btnVoltar: {
    marginTop: 40,
    marginLeft: 95,
    width: 180,
    height: 50,
    backgroundColor: "#53CF48",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txtVoltar: {
    fontSize: 20,
    fontFamily: "Rubik_600SemiBold",
  },
});
