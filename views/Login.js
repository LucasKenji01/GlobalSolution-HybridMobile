import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";



export default function Login({navigation}) {
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
      <Text style={styles.titulo}>Login</Text>
      <View style={styles.linha} />
      <View style={styles.forms}>
        <Text style={styles.textoEmail}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.textoSenha}>Senha</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textoBtn}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}>
        <View style={styles.linhaMenor}/>
        <Image style={styles.image} source={require('../assets/Garfo-e-faca.png')}/>
        <View style={styles.linhaMenor}/>
      </View>
      <View style={styles.containerCadastrese}>
        <Text style={styles.ntc}>Não tem cadastro?</Text>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.textoBtn} onPress={() => navigation.navigate('CadastroFuncionario')}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 65,
    marginLeft: 15,
  },
  textoEmail: {
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
  },
  textoSenha: {
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    marginTop: 40,
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
  },
  separator: {
    flexDirection: 'row',
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  linhaMenor: {
    width: 150,
    height: 4,
    backgroundColor: "#53CF48",
    borderRadius: 5,
  },
  image: {
    marginLeft: 4,
    marginRight: 4,
  },
  containerCadastrese: {
    marginTop: 60,
    alignItems: "center",
  },
  ntc: {
    fontSize: 16,
    fontFamily: 'Rubik_500Medium',
    marginBottom: 40,
  }
});
