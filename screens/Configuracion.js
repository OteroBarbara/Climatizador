import React from "react";
import { View, TouchableOpacity} from "react-native";
import { H1 } from '@expo/html-elements';
import { global } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import Cal1 from "../components/Cal1";
import Cal2 from "../components/Cal2";
import Dif from "../components/Dif";
import Set from "../components/Set";

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
            <Cal1></Cal1>
            <Cal2></Cal2>
            <Dif></Dif>
            <Set></Set>
        </View>
    )
}

export default Configuracion