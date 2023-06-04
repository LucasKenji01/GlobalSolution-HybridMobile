import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";

export default function CadastroUsuario3({navigation}){

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
            <Text style={styles.titulo}>Cadastro Usuário</Text>
            <View style={styles.linha}/>
            <Text style={styles.txt}>Verifique se os dados estão corretos</Text>
            <View style={styles.caixa}>
                <Text style={styles.txtNumDestino}>Número CD Destino</Text>
                <Text style={styles.value}>003</Text>
                
                <Text style={styles.txtNome}>Nome</Text>
                <Text style={styles.value}>jorge Rodrigo</Text>
                
                <Text style={styles.txtSobrenome}>Sobrenome</Text>
                <Text style={styles.value}>dos Santos</Text>

                <Text style={styles.txtIdade}>Idade</Text>
                <Text style={styles.value}>30</Text>

                <Text style={styles.txtAltura}>Altura</Text>
                <Text style={styles.value}>1,85</Text>

                <Text style={styles.txtPeso}>Peso</Text>
                <Text style={styles.value}>80</Text>
                
            </View>
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
        marginLeft: 20,
        marginTop: 20,
        fontSize: 36,
        fontFamily: "Rubik_700Bold",
    },
    linha: {
        marginLeft: 20,
        width: 330,
        height: 4,
        backgroundColor: "#53CF48",
        borderRadius: 5,
        marginTop: 20,
    },
    txt: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold',
        marginTop: 40,
        marginLeft: 10,
    },
    caixa: {
        marginTop: 15,
        marginLeft: 10,
        width: 350,
        height: 460,
        borderWidth: 1,

    },
    txtNumDestino: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: "Rubik_600SemiBold",
    },
    txtNome: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: "Rubik_600SemiBold",
        marginTop: 30,
    },
    txtSobrenome: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: "Rubik_600SemiBold",
        marginTop: 30,
    },
    txtIdade: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: "Rubik_600SemiBold",
        marginTop: 30
    },
    txtAltura: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: "Rubik_600SemiBold",
        marginTop: 30
    },
    txtPeso: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 20,
        fontFamily: "Rubik_600SemiBold",
        marginTop: 30
    },
    value: {
        marginTop: 2,
        marginLeft: 25,
        fontSize: 18,
        fontFamily: 'Rubik_400Regular'
    },
    btn: {
        marginTop: 40,
        backgroundColor: '#53CF48',
        width: 180,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 90,
        borderRadius: 6,
    },
    txtBtn: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold',
    }

})