import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";


export default function CadastrarPontoDeDistribuicao({navigation}) {

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
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/Voltar.png')}/>
            </TouchableOpacity>
            <Text style={styles.titulo}>Cadastrar Novo</Text>
            <Text style={styles.titulo2}>Ponto de Distribuição</Text>
            <View style={styles.linha}/>
            <Text style={styles.txt1}>Número do Ponto de Distribuição</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.txt2}>Quantidade de vagas disponíveis</Text>
            <TextInput style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
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
    titulo2: {
        marginTop: 10,
        marginLeft: 10,
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
    txt1: {
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        marginTop: 70,
        marginLeft: 20
    },
    txt2: {
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        marginTop: 50,
        marginLeft: 20
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
        marginTop: 80,
        marginLeft: 100,
        width: 180,
        height: 50,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,

    },
    txtBtn: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    }
})