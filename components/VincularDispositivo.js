import React from "react";
import { View, Text, Button} from "react-native";
import { global } from "../styles/global";

const VincularDispositivo = () => {
    return(
        <View>
            <View style={global.vincularDispositivos}>
                <Text style={global.negrita}>SunLogic</Text>
                <Button title="Vincular"/>
            </View>
        </View>
    )
}

export default VincularDispositivo