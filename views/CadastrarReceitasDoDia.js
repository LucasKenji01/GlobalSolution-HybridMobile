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

export default function CadastrarReceitasDoDia({navigation}) {
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
      <Text style={styles.titulo}>Cadastrar receitas do dia</Text>
      <View style={styles.linha} />
      <Text style={styles.txtNomeDaReceita}>Nome da receita</Text>
      <TextInput style={styles.inputNomeDaReceita}/>
      <Text style={styles.txtModoDePreparo}>Modo de preparo</Text>
      <TextInput style={styles.inputModoDePreparo}/>
      <TouchableOpacity style={styles.btn}>
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
    fontSize: 26,
    fontFamily: "Rubik_700Bold",
  },
  linha: {
    width: 330,
    height: 4,
    backgroundColor: "#53CF48",
    borderRadius: 5,
    marginTop: 20,
  },
  txtNomeDaReceita: {
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold',
    marginTop: 15,
  },
  inputNomeDaReceita: {
    width: 340,
    height: 60,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 6,
    padding: 5
  },
  txtModoDePreparo: {
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold',
    marginTop: 20,
  },
  inputModoDePreparo: {
    width: 340,
    height: 400,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 6,
    paddingTop: -50,
    
  },
  btn: {
    width: 180,
    height: 50,
    backgroundColor: '#53CF48',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 80,
    borderRadius: 6,
  },
  txtBtn: {
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold'
  }
});
