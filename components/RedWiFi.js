import React from "react";
import { Text, TouchableOpacity} from "react-native";
import { global } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';

const RedWiFi = ({texto}) => {
    return(
        <TouchableOpacity style={global.botonGrisContainer}>
            <Ionicons name="wifi" size={24} color="blue"/>
            <Text style={global.botonRedWiFi}>{texto}</Text>
        </TouchableOpacity>
        

    )
}

export default RedWiFi