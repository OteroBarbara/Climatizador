import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { H1 } from '@expo/html-elements';
import { global } from '../styles/global';
import BotonSiguiente from "../components/BotonSiguiente";
import Footer from "../components/Footer";
import RedWiFi from "../components/RedWiFi";
import { Ionicons } from '@expo/vector-icons';

const Wifi = ({navigation}) => {
    const goToControlador = ()=>{
        navigation.pop();
        navigation.replace("Controlador");
    }
    const goBack = ()=>{
        navigation.pop();
    }
    return(
        <View style={global.fondoBlanco}>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back" size={32} color="black" />
            </TouchableOpacity>
            <View style={global.main}>
                <View>
                    <View style={global.container}>
                        <H1 style={global.encabezado}>
                            Conectá tu dispositivo con tu red WIFI
                        </H1>
                        <Text style={global.negrita}>
                            Selecciona tu red WIFI
                        </Text>
                    </View>    
                    <RedWiFi texto={'Fibertel 1'}/>
                </View>
                <View  style={global.containerCenter}>
                    <TouchableOpacity style={global.botonBottomContainer} onPress={goToControlador}>
                        <BotonSiguiente texto={'EMPEZAR'} />
                    </TouchableOpacity>       
                    <Footer/>
                </View>    
            </View>
        </View>
    )
}

export default Wifi