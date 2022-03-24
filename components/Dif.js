import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { incrementD, decrementD } from "../store/action";

const Dif = () => {
    const dif = useSelector(state => state.dif);
    const dispatch= useDispatch()
    return(
        <View style={global.cajaBtnConfig}>
            <Text>DIF</Text>
            <View style={global.btnConfig}>
                <TouchableOpacity onPress={()=>dispatch(decrementD())}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>{dif}</Text>
                <TouchableOpacity onPress={()=>dispatch(incrementD())}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dif