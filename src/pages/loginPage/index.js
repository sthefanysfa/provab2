import { TextInput, SafeAreaView, View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";

export default function loginPage(){
    return(
        <SafeAreaView style={styles.container}>
           {/* <View style={styles.viewImg}>
                <Image
                    style={styles.logoImg}
                    source={}
                />
            </View> */}
            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Senha'/>
            </View>
            <View style={styles.viewConfirmar}>
            <Link style={styles.link} to={{screen: "Dashboard"}}>ENTRAR</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Registro"}}>Registre-se...</Link>
                <Link style={styles.link} to={{screen: "Esqueceu-senha"}}>Esqueci a senha...</Link>
                
            </View>
        </SafeAreaView>
    )
}