import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";

export default function Home(){

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
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/Logo.png')}/>
                <View style={styles.containerOla}>
                    <Text style={styles.headerTxt}>Olá, Tony</Text>
                </View>
            </View>
            <View style={styles.minhasInfo}>
                <Text style={styles.minhasInfoTitulo}>Minhas informações</Text>
                <View style={styles.linha}/>
                <View style={styles.nomeSobrenome}>
                    <Text style={styles.nome}>Tony</Text>
                    <Text style={styles.sobrenome}>Stark</Text>
                </View>
                <Text style={styles.email}>tonystark@email.com</Text>
                <Text style={styles.senha}>********</Text>
            </View>
            <TouchableOpacity style={styles.btnEditar}>
                <Text style={styles.txtEditar}>Editar</Text>
            </TouchableOpacity>
            <View style={styles.separator}>
                <View style={styles.linhaMenor}/>
                <Image style={styles.garfoEFaca} source={require('../assets/Garfo-e-faca.png')}/>
                <View style={styles.linhaMenor}/>
            </View>
            <TouchableOpacity style={styles.btnUsuario}>
                <Text style={styles.txtUsuario}>Cadastrar Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDoacao}>
                <Text style={styles.txtDoacao}>Registrar Doação</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
            <Text style={styles.txtFooter}>Juntos contra a fome!</Text>
            <Image style={styles.coracao} source={require('../assets/Coracao.png')}/>
            </View>
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    logo: {
        width: 80,
        height: 80,
        position: "absolute",
        zIndex: 1,
    },
    containerOla: {
        borderWidth: 2,
        width: 310,
        height: 60,
        backgroundColor: '#53CF48',
        marginLeft: 20,
        borderRadius: 50,
        justifyContent: "center"
    },
    headerTxt: {
        marginLeft: 70,
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold',
        color: '#FFFFFF'
    },
    minhasInfo: {
        marginTop: 50,
        borderWidth: 1,
        width: 330,
        height: 230,
        borderRadius: 6
    },
    minhasInfoTitulo: {
        marginTop: 15,
        marginLeft: 12,
        fontSize: 30,
        fontFamily: 'Rubik_700Bold',
    },
    linha: {
        width: 300,
        height: 2,
        backgroundColor: "#53CF48",
        borderRadius: 5,
        marginTop: 4,
        marginLeft: 10,
    },
    nomeSobrenome: {
        flexDirection: "row",
        marginTop: 12,
        marginLeft: 12,
    },
    nome: {
        marginRight: 3,
        fontSize: 20,
        fontFamily: 'Rubik_400Regular',
    },
    sobrenome: {
        fontSize: 20,
        fontFamily: 'Rubik_400Regular',
    },
    email: {
        marginTop: 30,
        marginLeft: 12,
        fontSize: 20,
        fontFamily: 'Rubik_400Regular',
    },
    senha: {
        marginTop: 30,
        marginLeft: 12,
        fontSize: 20,
        fontFamily: 'Rubik_400Regular',
    },
    btnEditar: {
        marginTop: 15,
        marginLeft: 70,
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 40,
        backgroundColor: '#53CF48',
        borderRadius: 6,

    },
    txtEditar: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    separator: {
        flexDirection: 'row',
        marginTop: 40,
        ustifyContent: "center",
        alignItems: "center"
    },
    linhaMenor: {
        width: 150,
        height: 4,
        backgroundColor: "#53CF48",
        borderRadius: 5,
    },
    garfoEFaca: {
        marginLeft: 4,
        marginRight: 4,
    },
    btnUsuario: {
        marginTop: 40,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtUsuario: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnDoacao: {
        marginTop: 40,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtDoacao: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    footer: {
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "center"
    },
    txtFooter: {
        fontSize: 14,
        fontFamily: 'Rubik_400Regular'
    },
    coracao: {
        marginLeft: 5,

    }

})