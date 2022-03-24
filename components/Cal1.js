import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { incrementC1, decrementC1 } from "../store/action";

const Cal1 = () => {
    const cal1 = useSelector(state => state.cal1);
    const dispatch= useDispatch()
    return(
        <View style={global.cajaBtnConfig}>
            <Text>CAL 1</Text>
            <View style={global.btnConfig}>
                <TouchableOpacity onPress={()=>dispatch(decrementC1())}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>{cal1}</Text>
                <TouchableOpacity onPress={()=>dispatch(incrementC1())}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cal1