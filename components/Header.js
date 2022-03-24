import React from "react";
import { View, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { global } from "../styles/global";
import {useSelector, useDispatch} from 'react-redux'
import { ctrlChange } from "../store/action";
import { H1 } from "@expo/html-elements";

const Header = ({navigation}) => {
    const on = useSelector(state => state.on);
    const dispatch= useDispatch();
    const goToAjustes = ()=>{
        navigation.push("Ajustes");
    }
    let styleBtn = global.botonPowerOn;
    if (!on){
        styleBtn = global.botonPowerOff;
    } 
    return (
        <View style={global.cajaHeaderControlador}>
            <TouchableOpacity onPress={goToAjustes}>
                <Ionicons name="options-outline" size={32} color="white" />
            </TouchableOpacity>
            <View style={global.headerControlador}>
                <H1 style={global.textoBlanco}>Controlador</H1>
                <TouchableOpacity 
                style={styleBtn}
                onPress={()=>dispatch(ctrlChange())}>
                    <Ionicons name="power" size={32} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header