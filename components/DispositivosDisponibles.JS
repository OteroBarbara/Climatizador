import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { global } from '../styles/global';

const DispositivosDisponibles = () => {
    return(
        <View>
            <View style={global.dispositivosDisponibles}>
                <Text style={global.negrita}>Dispositivos disponibles</Text>
                <TouchableOpacity style={global.botonBuscarContainer}>
                    <Text style={global.botonBuscar}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DispositivosDisponibles