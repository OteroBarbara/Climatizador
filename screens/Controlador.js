import React from "react";
import { View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { global } from "../styles/global";
import { H1, H2 } from '@expo/html-elements';

const Controlador = ({navigation}) => {
    const image = require('../assets/fondo-controlador.png') ;
    const goToAjustes = ()=>{
        navigation.push("Ajustes");
     }
    return(
        <View style={{flex:1, backgroundColor:'#00C7C7'}}>
            <View style={global.headerControlador}>
                    <TouchableOpacity onPress={goToAjustes}>
                        <Ionicons name="options-outline" size={32} color="white" />
                    </TouchableOpacity>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                        <H1 style={global.textoBlanco}>Controlador</H1>
                        <TouchableOpacity style={global.botonPower}>
                            <Ionicons name="power" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
            </View>
            <ImageBackground source={image} resizeMode="cover" style={global.image} imageStyle={{ borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                <View style={global.containerControlador}>
                    <View style={{backgroundColor:'#B7B5B5', justifyContent:'center', alignItems:'center',borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                        <H2>Climatizador</H2>
                    </View>
                    <ImageBackground source={require('../assets/img-temperatura.png')} resizeMode="contain" style={global.imageTemperatura}>
                        <View>
                            <H1>15º</H1>
                        </View>
                    </ImageBackground>
                </View>
                <View style={global.containerControlador}>
                    <View style={{paddingHorizontal:20}}>
                        <H2>Luces</H2>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Controlador
