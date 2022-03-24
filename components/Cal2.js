import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { incrementC2, decrementC2 } from "../store/action";

const Cal2 = () => {
    const cal2 = useSelector(state => state.cal2);
    const dispatch= useDispatch()
    return(
        <View style={global.cajaBtnConfig}>
            <Text>CAL 2</Text>
            <View style={global.btnConfig}>
                <TouchableOpacity onPress={()=>dispatch(decrementC2())}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>{cal2}</Text>
                <TouchableOpacity onPress={()=>dispatch(incrementC2())}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cal2