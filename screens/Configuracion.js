import React from "react";
import { View, TouchableOpacity} from "react-native";
import { H1 } from '@expo/html-elements';
import { global } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';

const Configuracion = ({navigation}) => {
    const goBack = ()=>{
        navigation.pop();
    }
    return(
        <View style={global.fondoBlanco}>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <View style={global.container}>
                <H1 style={global.encabezado}>
                    Configuración
                </H1>
            </View>
        </View>
    )
}

export default Configuracion