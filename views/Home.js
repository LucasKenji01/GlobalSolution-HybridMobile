import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  } from "@expo-google-fonts/rubik";

export default function Home({navigation}){

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
            <Image style={styles.logo} source={require('../assets/Logo.png')}/>


            <TouchableOpacity style={styles.btnExibirPontos} onPress={() => navigation.navigate('ExibirPontosDeDistribuicao')}>
                <Text style={styles.txtExibirPontos}>Exibir Pontos de Distribuição</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCadastrarPonto} onPress={() => navigation.navigate('CadastrarPontoDeDistribuicao')}>
                <Text style={styles.txtCadastrarPonto}>Cadastrar Ponto de Distribuição</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCadastrarUsuario} onPress={() => navigation.navigate('CadastroUsuario')}>
                <Text style={styles.txtCadastrarUsuario}>Cadastrar Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPesquisarUsuario} onPress={() => navigation.navigate('PesquisarUsuario')}>
                <Text style={styles.txtPesquisarUsuario}>Pesquisar Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDoacoes} onPress={() => navigation.navigate('Doacoes')}>
                <Text style={styles.txtDoacoes}>Doações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGerarReceitasDoDia} onPress={() => navigation.navigate('GerarReceitasDoDia')}>
                <Text style={styles.txtGerarReceitasDoDia}>Gerar receitas do dia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCadastrarReceitasDoDia} onPress={() => navigation.navigate('CadastrarReceitasDoDia')}>
                <Text style={styles.txtCadastrarReceitasDoDia}>Cadastrar receitas do dia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSair} onPress={() => navigation.popToTop()}>
                <Text style={styles.txtSair}>Sair</Text>
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
    logo: {
        marginLeft: 120,
        width: 90,
        height: 90,
    },
    btnExibirPontos: {
        marginTop: 20,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtExibirPontos: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnCadastrarPonto: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtCadastrarPonto: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnCadastrarUsuario: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtCadastrarUsuario: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnPesquisarUsuario: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtPesquisarUsuario: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnDoacoes: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtDoacoes: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnGerarReceitasDoDia: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtGerarReceitasDoDia: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnCadastrarReceitasDoDia: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtCadastrarReceitasDoDia: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    btnSair: {
        marginTop: 15,
        width: 340,
        height: 60,
        backgroundColor: '#53CF48',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    txtSair: {
        fontSize: 20,
        fontFamily: 'Rubik_600SemiBold'
    },
    footer: {
        marginTop: 30,
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