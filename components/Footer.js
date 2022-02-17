import React from "react";
import { View, Image} from "react-native";
import { global } from "../styles/global";

const Footer = () => {
    return(
        <View style={global.footer}>
            <Image
            style={global.logo}
            source={require('../assets/logo.png')}
            />
        </View>
    )
}

export default Footer