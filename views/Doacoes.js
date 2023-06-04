import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";

export default function Doacoes({navigation}){

    const [fontLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
      });
    
      if (!fontLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Doações</Text>
            <View style={styles.linha}/>
            <View style={styles.caixa}>
                <Text style={styles.caixaTitulo}>Instituição RSF</Text>
                <Text style={styles.banco}>Itaú</Text>
                <Text style={styles.agencia}>Ag: 0000</Text>
                <Text style={styles.conta}>CC: 11111-4</Text>
                <Text style={styles.chave}>Chave Pix:</Text>
                <Text style={styles.emailPix}>doacao@ruasemfome.com.br</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.txtFooter}>Juntos contra a fome!</Text>
                <Image style={styles.coracao} source={require('../assets/Coracao.png')}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
              <Text style={styles.txtBtn}>Voltar</Text>
            </TouchableOpacity>
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
  caixa: {
    width: 340,
    height: 290,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 6,
  },
  caixaTitulo: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 28,
    fontFamily: "Rubik_700Bold",
  },
  banco: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  agencia: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  conta: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  chave: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  emailPix: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 20,
    fontFamily: "Rubik_400Regular",
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  txtFooter: {
    fontSize: 14,
    fontFamily: 'Rubik_400Regular'
  },
  coracao: {
    marginLeft: 5,
  },
  btn: {
    width: 180,
    height: 50,
    backgroundColor: '#53CF48',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 70,
    borderRadius: 6,
  },
  txtBtn: {
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold'
  }
})