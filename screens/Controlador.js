import React from "react";
import { View, ImageBackground} from "react-native";
import { global } from "../styles/global";
import {useSelector} from 'react-redux';
import Modo from "../components/Modo";
import Luces from "../components/Luces";
import Header from "../components/Header";

const Controlador = () => {
    const on = useSelector(state => state.on);
    if(on){
        return(
            <View style={{flex:1, backgroundColor:'#00C7C7'}}>
                <Header></Header>
                <ImageBackground source={require('../assets/fondo-controlador.png')} resizeMode="cover" style={global.image} imageStyle={{ borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                    <Modo></Modo>
                    <Luces></Luces>
                </ImageBackground>
            </View>
        )
    }else{
        return(
            <View style={{flex:1, backgroundColor:'#454545'}}>
                <Header></Header>
                <ImageBackground source={require('../assets/fondo-off.png')} resizeMode="cover" style={global.image} imageStyle={{ borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                    <Modo></Modo>
                    <Luces></Luces>
                </ImageBackground>
            </View>
        )
    }
}

export default Controlador
