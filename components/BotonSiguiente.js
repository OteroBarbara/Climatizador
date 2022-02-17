import React from "react";
import { Text} from "react-native";
import { global } from "../styles/global";

const BotonSiguiente = ({texto}) => {
    return(
        
        <Text style={global.botonBottom}>{texto}</Text>

    )
}

export default BotonSiguiente