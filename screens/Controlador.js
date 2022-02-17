import React from "react";
import { View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { global } from "../styles/global";

const Controlador = ({navigation}) => {
    const image = require('../assets/fondo-controlador.png') ;
    const goToAjustes = ()=>{
        navigation.push("Ajustes");
     }
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={global.image}>
                <TouchableOpacity onPress={goToAjustes}>
                    <Ionicons name="options-outline" size={32} color="black" />
                </TouchableOpacity>
                <Text>Controlador</Text>
            </ImageBackground>
        </View>
    )
}

export default Controlador
