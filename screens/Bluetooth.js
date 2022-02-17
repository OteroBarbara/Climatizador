import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import { H1 } from '@expo/html-elements';
import { global } from '../styles/global';
import DispositivosDisponibles from "../components/DispositivosDisponibles.JS";
import VincularDispositivo from "../components/VincularDispositivo";
import BotonSiguiente from "../components/BotonSiguiente";
import Footer from "../components/Footer";
import { Ionicons } from '@expo/vector-icons';

const Bluetooth = ({navigation}) => {
    return(
        <View style={global.fondoBlanco}>
            <Ionicons name="arrow-back" size={32} color="white" />
            <View style={global.main}>
                <View>
                    <View style={global.container}>
                        <H1 style={global.encabezado}>
                            Vinculá tu climatizador BLUETOOTH
                        </H1>
                        <Text>
                            Es necesario que enciendas el BLUETOOTH desde el teléfono.
                        </Text>
                        <DispositivosDisponibles/>
                    </View>    
                        <VincularDispositivo/>
                </View>
                <View  style={global.containerCenter}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Wifi")}  style={global.botonBottomContainer}>
                        <BotonSiguiente texto={'SIGUIENTE'} />
                    </TouchableOpacity>       
                    <Footer/>
                </View>    
            </View>
        </View>
    )
}

export default Bluetooth
