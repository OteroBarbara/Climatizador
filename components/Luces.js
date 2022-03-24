import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import {useSelector, useDispatch} from 'react-redux'
import { lucesChange } from "../store/action";
import { H2 } from "@expo/html-elements";
import Horas from "./Horas";

const Luces = () => {
    const luces = useSelector(state => state.luces); 
    
    const dispatch= useDispatch()
    switch (luces) {
        case 1:
            return (
                <View style={global.containerControlador}>
                    <View style={{paddingHorizontal:20}}>
                        <H2>Luces</H2>
                    </View>
                    <View style={{borderRadius: 20,display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#F8F8F8', marginHorizontal: 20, marginBottom: 20}}>
                        <TouchableOpacity
                        style={{borderStyle:'solid', borderWidth: 1,borderColor: '#D0D0D0',minHeight: 60,backgroundColor:'#EEEEEE',paddingVertical: 12,borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text>Encedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(2))}>
                            <Text style={{color:'#B7B5B5'}}>Modo</Text> 
                            <Text style={{color:'#B7B5B5'}}>Nocturno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(3))}>
                            <Text style={{color:'#B7B5B5'}}>Apagado</Text> 
                            <Text style={{color:'#B7B5B5'}}>Automático</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        case 2:
            return (
                <View style={global.containerControlador}>
                    <View style={{paddingHorizontal:20}}>
                        <H2>Luces</H2>
                    </View>
                    <View style={{borderRadius: 20,display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#F8F8F8', marginHorizontal: 20, marginBottom: 20}}>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(1))}>
                            <Text style={{color:'#B7B5B5'}}>Encedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{borderStyle:'solid', borderWidth: 1,borderColor: '#D0D0D0',backgroundColor:'#EEEEEE',paddingVertical: 12,borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text>Modo</Text> 
                            <Text>Nocturno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(3))}>
                            <Text style={{color:'#B7B5B5'}}>Apagado</Text> 
                            <Text style={{color:'#B7B5B5'}}>Automático</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Las luces se apagan automáticamente de noche.</Text>
                </View>
            );
        case 3:
            return (
                <View style={global.containerControlador}>
                    <View style={{paddingHorizontal:20}}>
                        <H2>Luces</H2>
                    </View>
                    <View style={{borderRadius: 20,display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#F8F8F8', marginHorizontal: 20, marginBottom: 20}}>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(1))}
                        >
                            <Text style={{color:'#B7B5B5'}}>Encedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(2))}
                        >
                            <Text style={{color:'#B7B5B5'}}>Modo</Text> 
                            <Text style={{color:'#B7B5B5'}}>Nocturno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{borderStyle:'solid', borderWidth: 1,borderColor: '#D0D0D0', backgroundColor:'#EEEEEE',paddingVertical: 12,borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text>Apagado</Text> 
                            <Text>Automático</Text>
                        </TouchableOpacity>
                    </View>
                    <Horas></Horas>
                </View>
            );
        default:
            return (
                <View style={global.containerControlador}>
                    <View style={{paddingHorizontal:20}}>
                        <H2>Luces</H2>
                    </View>
                    <View style={{borderRadius: 20,display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#F8F8F8', marginHorizontal: 20, marginBottom: 20}}>
                        <TouchableOpacity
                        style={{borderStyle:'solid', borderWidth: 1,borderColor: '#D0D0D0',minHeight: 60,backgroundColor:'#EEEEEE',paddingVertical: 12,borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text>Encedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(2))}>
                            <Text style={{color:'#B7B5B5'}}>Modo</Text> 
                            <Text style={{color:'#B7B5B5'}}>Nocturno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>dispatch(lucesChange(3))}>
                            <Text style={{color:'#B7B5B5'}}>Apagado</Text> 
                            <Text style={{color:'#B7B5B5'}}>Automático</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
    }
}

export default Luces