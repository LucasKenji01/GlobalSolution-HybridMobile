import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";

export default function ExibirPontosDeDistribuicao({navigation}) {

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
            <Text style={styles.titulo}>Pesquisar Usuário</Text>
            <View style={styles.linha}/>
            <Text style={styles.txt}>Número do Documento</Text>
            <TextInput style={styles.input}/>
            <View style={styles.caixa}>
                <Text style={styles.txtNumDocumento}>12345678900</Text>
                <View style={styles.nomeSobrenome}>
                    <Text style={styles.nome}>Jorge Rodrigo</Text>
                    <Text style={styles.sobrenome}>dos Santos</Text>
                </View>
                <Text style={styles.pontoDistribuicao}>Ponto de Distribuição: 003</Text>
                <Text style={styles.refeicao}>Refeição: 3</Text>
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
        fontFamily: 'Rubik_500Medium'
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
        borderRadius: 6
    },
    txtNumDocumento: {
        marginTop: 15,
        marginLeft: 30,
        fontSize: 16,
        fontFamily: 'Rubik_700Bold'
    },
    nomeSobrenome: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 30,
    },
    nome: {
        marginRight: 5,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular'
    },
    sobrenome: {
        fontSize: 16,
        fontFamily: 'Rubik_400Regular'
    },
    pontoDistribuicao: {
        marginTop: 30,
        marginLeft: 30,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular'
    },
    refeicao: {
        marginTop: 30,
        marginLeft: 30,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular'
    },
    btn: {
        marginTop: 80,
        marginLeft: 100,
        width: 180,
        height: 50,
        backgroundColor: "#53CF48",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    txtBtn:{
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    }
})