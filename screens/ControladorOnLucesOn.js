import React from "react";
import { View, TouchableOpacity, ImageBackground, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { global } from "../styles/global";
import { H1, H2 } from '@expo/html-elements';

const ControladorOnLucesOn = ({navigation}) => {
    const image = require('../assets/fondo-controlador.png') ;
    const goToAjustes = ()=>{
        navigation.push("Ajustes");
     }
    return(
        <View style={{flex:1, backgroundColor:'#00C7C7'}}>
            <View style={global.cajaHeaderControlador}>
                    <TouchableOpacity onPress={goToAjustes}>
                        <Ionicons name="options-outline" size={32} color="white" />
                    </TouchableOpacity>
                    <View style={global.headerControlador}>
                        <H1 style={global.textoBlanco}>Controlador</H1>
                        <TouchableOpacity 
                        style={global.botonPowerOn}
                        onPress={() => navigation.navigate('Off')}>
                            <Ionicons name="power" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
            </View>
            <ImageBackground source={image} resizeMode="cover" style={global.image} imageStyle={{ borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
                <View style={global.containerControlador}>
                    <View style={global.cajaTemperaturaControlador}>                
                        <H2>Climatizador</H2>
                        <View style={global.cajaBotonesModo}>                
                            <TouchableOpacity 
                            style={{backgroundColor:'#B7B5B5',borderBottomRightRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10, paddingVertical:10}}
                            onPress={() => navigation.navigate('Manual')}>
                                <Text>Modo</Text>
                                <Text>Manual</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{backgroundColor:'#fff', borderTopLeftRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -10}}
                            onPress={() => navigation.navigate('Auto')}>
                                <Text>Modo</Text>
                                <Text>Auto</Text>
                            </TouchableOpacity>
                        </View>
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
                    <View style={{borderRadius: 20,display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#F8F8F8', marginHorizontal: 20, marginBottom: 20}}>
                        <TouchableOpacity
                        style={{borderStyle:'solid', borderWidth: 1,borderColor: '#D0D0D0',minHeight: 60,backgroundColor:'#EEEEEE',paddingVertical: 12,borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => navigation.navigate('LucesOn')}>
                            <Text>Encedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => navigation.navigate('ModoNocturno')}>
                            <Text style={{color:'#B7B5B5'}}>Modo</Text> 
                            <Text style={{color:'#B7B5B5'}}>Nocturno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => navigation.navigate('On')}>
                            <Text style={{color:'#B7B5B5'}}>Apagado</Text> 
                            <Text style={{color:'#B7B5B5'}}>Automático</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ControladorOnLucesOn
