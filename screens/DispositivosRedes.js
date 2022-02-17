import React from "react";
import { View, TouchableOpacity} from "react-native";
import { H1 } from '@expo/html-elements';
import { global } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';

const DispositivosRedes = ({navigation}) => {
    const goBack = ()=>{
        navigation.pop();
    }
    return(
        <View style={global.fondoBlanco}>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back" size={32} color="black" />
            </TouchableOpacity>
            <View style={global.container}>
                <H1 style={global.encabezado}>
                    Dispositivos y Redes
                </H1>
            </View>
        </View>
    )
}

export default DispositivosRedes