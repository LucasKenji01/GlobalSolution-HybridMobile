import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
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
            <Text style={styles.pergunta}>Qual é o tipo de doação?</Text>
            <TouchableOpacity style={styles.btnFinanceira} onPress={() => navigation.navigate('DoacaoFinanceira')}>
              <Text style={styles.txtFinanceiro}>Financeira</Text>
            </TouchableOpacity>
            <Text style={styles.txtOu}>ou</Text>
            <TouchableOpacity style={styles.btnAlimentos} onPress={() => navigation.navigate('DoacaoAlimentos')}>
              <Text style={styles.txtAlimentos}>Alimentos</Text>
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
  pergunta: {
    marginTop: 50,
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold',
  },
  btnFinanceira: {
    marginTop: 60,
    width: 340,
    height: 60,
    backgroundColor: '#53CF48',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txtFinanceiro: {
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold'
  },
  txtOu: {
    fontSize: 16,
    fontFamily: 'Rubik_400Regular',
    marginTop: 40,
    marginLeft: 150 
  },
  btnAlimentos: {
    marginTop: 40,
    width: 340,
    height: 60,
    backgroundColor: '#53CF48',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txtAlimentos: {
    fontSize: 20,
    fontFamily: 'Rubik_600SemiBold'
  }
})