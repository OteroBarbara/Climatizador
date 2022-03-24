import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import { incrementT, decrementT } from "../store/action";

const Temperatura = () => {
    const temperatura = useSelector(state => state.temperatura);
    const dispatch= useDispatch()
    return(
        <View style={global.cajaTemperatura}>
            <Text>Tº deseada</Text>
            <View style={global.temperatura}>
                <TouchableOpacity onPress={()=>dispatch(decrementT())}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>{temperatura}</Text>
                <TouchableOpacity onPress={()=>dispatch(incrementT())}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Temperatura