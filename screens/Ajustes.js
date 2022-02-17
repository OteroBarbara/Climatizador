import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { H1 } from '@expo/html-elements';
import { global } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';

const Ajustes = ({navigation}) => {
    const goToDispositivosRedes = ()=>{
        navigation.push("Dispositivos y Redes");
    }
    const goToConfiguracion = ()=>{
        navigation.push("Configuracion");
    }
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
                    Ajustes
                </H1>
            </View>
            <TouchableOpacity style={global.botonGrisContainer} onPress={goToDispositivosRedes}>
                <Text style={global.negrita}>Dispositivos y Redes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={global.botonGrisContainer} onPress={goToConfiguracion}>
                <Text style={global.negrita}>Configuracion</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Ajustes