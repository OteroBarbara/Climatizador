import React from "react";
import { View, TouchableOpacity, Text, ImageBackground} from "react-native";
import { global } from "../styles/global";
import {useSelector, useDispatch} from 'react-redux'
import { modoChange } from "../store/action";
import { H2, H1 } from "@expo/html-elements";
import Temperatura from "./Temperatura";

const Modo = () => {
    const auto = useSelector(state => state.auto); 
    const on = useSelector(state => state.on); 
    let imagen = require('../assets/img-temperatura-off.png');
    if(on && auto){
        imagen = require('../assets/img-temperatura.png');
    }
    const dispatch= useDispatch()
    if (auto){
        return(
            <View style={global.containerControlador}>
                <View style={{backgroundColor:'#B7B5B5', justifyContent:'center', alignItems:'center',borderTopRightRadius: 25, borderTopLeftRadius: 25}}>                
                    <H2>Climatizador</H2>             
                    <View style={global.cajaBotonesModo}>                
                        <TouchableOpacity 
                        style={{backgroundColor:'#B7B5B5',borderBottomRightRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10, paddingVertical:10}}
                        onPress={()=>dispatch(modoChange())}
                        >
                            <Text>Modo</Text>
                            <Text>Manual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{backgroundColor:'#fff', borderTopLeftRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10}}
                        >
                            <Text>Modo</Text>
                            <Text>Auto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ImageBackground source={imagen} resizeMode="contain" style={global.imageTemperatura}>
                    <View>
                        <H1>15º</H1>
                    </View>
                </ImageBackground>
                <Temperatura></Temperatura>
                <Text>Bomba ON</Text>
            </View>
        )
    }else{
        return(
            <View style={global.containerControlador}>
                <View style={global.cajaTemperaturaControlador}>                
                    <H2>Climatizador</H2>
                    <View style={global.cajaBotonesModo}>                
                        <TouchableOpacity 
                        style={{backgroundColor:'#fff',borderTopRightRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10, paddingVertical:10}}
                        >
                            <Text>Modo</Text>
                            <Text>Manual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{backgroundColor:'#B7B5B5', borderBottomLeftRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10}}
                        onPress={()=>dispatch(modoChange())}>
                            <Text>Modo</Text>
                            <Text>Auto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ImageBackground source={imagen} resizeMode="contain" style={global.imageTemperatura}>
                    <View>
                        <H1>15º</H1>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default Modo