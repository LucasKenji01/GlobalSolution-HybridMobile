import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
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
            <Text style={styles.titulo}>Cadastro Usuário</Text>
            <View style={styles.linha}/>
            <View style={styles.forms}>
                <Text style={styles.txtNome}>Estado</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.txtSobrenome}>Cidade</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.txtGenero}>Bairro</Text>
                <TextInput style={styles.input}/>
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
    txtNome: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
    },
    txtSobrenome: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 30,
    },
    txtGenero: {
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        marginTop: 30
    },
    input: {
        marginTop: 5,
        width: 300,
        height: 40,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 4,
    },
    btn: {
        marginTop: 40,
        backgroundColor: '#53CF48',
        width: 180,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 70,
        borderRadius: 6,
    },
    txtBtn: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold',
    }

})