import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { global } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { incrementS, decrementS } from "../store/action";

const Set = () => {
    const set = useSelector(state => state.set);
    const dispatch= useDispatch()
    return(
        <View style={global.cajaBtnConfig}>
            <Text>SET</Text>
            <View style={global.btnConfig}>
                <TouchableOpacity onPress={()=>dispatch(decrementS())}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>{set}</Text>
                <TouchableOpacity onPress={()=>dispatch(incrementS())}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Set