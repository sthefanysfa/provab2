import { Image, Text, View } from "react-native";
import { Link } from "@react-navigation/native";

import styles from './style';

export default function rpg(props){
    return(
        
        <View style={styles.container}>
            <View style={styles.viewimg}>
                <Image style={styles.img} source ={{uri: props.rpg.imgUrl}}/>
            </View>
            <View style={styles.viewdata}>
                <Text style={styles.titulo}> {props.rpg.titulo} </Text>                
                <Text style={styles.descricao}> {props.rpg.descricao} </Text>                
                <Link to={{screen: "Login"}}>Trocar</Link>              

            </View>
        </View>
    );
}