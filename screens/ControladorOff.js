import React from "react";
import { View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { global } from "../styles/global";
import { H1, H2 } from '@expo/html-elements';

const ControladorOff = ({navigation}) => {
    const image = require('../assets/fondo-off.png') ;
    const goToAjustes = ()=>{
        navigation.push("Ajustes");
     }
    return(
        <View style={{flex:1, backgroundColor:'#454545'}}>
            <View style={global.cajaHeaderControlador}>
                    <TouchableOpacity onPress={goToAjustes}>
                        <Ionicons name="options-outline" size={32} color="white" />
                    </TouchableOpacity>
                    <View style={global.headerControlador}>
                        <H1 style={global.textoBlanco}>Controlador</H1>
                        <TouchableOpacity style={global.botonPowerOff}
                        onPress={() => navigation.navigate('On')}>
                            <Ionicons name="power" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
            </View>
            <ImageBackground source={image} resizeMode="cover" style={global.image} imageStyle={{ borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                <View style={global.containerControlador}>
                    <View style={{backgroundColor:'#B7B5B5', justifyContent:'center', alignItems:'center',borderTopRightRadius: 25, borderTopLeftRadius: 25}}>                
                        <H2>Climatizador</H2>             
                        <View style={global.cajaBotonesModo}>                
                            <TouchableOpacity 
                            style={{backgroundColor:'#B7B5B5',borderBottomRightRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10, paddingVertical:10}}
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
                    <ImageBackground source={require('../assets/img-temperatura-off.png')} resizeMode="contain" style={global.imageTemperatura}>
                        <View>
                            <H1>15º</H1>
                        </View>
                    </ImageBackground>
                </View>
                <View style={global.containerControlador}>
                    <View style={{paddingHorizontal:20}}>
                        <H2>Luces</H2>
                    </View>
                    <View style={{borderRadius: 20,display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#F8F8F8', marginHorizontal: 20, marginBottom: 20}}>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text style={{color:'#B7B5B5'}}>Encedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
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
                </View>
            </ImageBackground>
        </View>
    )
}

export default ControladorOff
