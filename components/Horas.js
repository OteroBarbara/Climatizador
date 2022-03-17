import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { incrementH, decrementH } from "../store/action";

const Horas = () => {
    const horas = useSelector(state => state.horas); 
    
    const dispatch= useDispatch()
    return(
        <View>
            <Text>Las luces se apagan automáticamente luego de {horas} horas.</Text>
            <View style={global.horas}>
                <TouchableOpacity onPress={()=>dispatch(decrementH())}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>{horas}</Text>
                <TouchableOpacity onPress={()=>dispatch(incrementH())}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>    
        </View>
    )
}

export default Horas