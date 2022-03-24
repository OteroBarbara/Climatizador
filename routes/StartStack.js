import React from 'react';
import Bluetooth from '../screens/Bluetooth';
import Wifi from '../screens/Wifi';
import Ajustes from '../screens/Ajustes';
import Configuracion from '../screens/Configuracion';
import DispositivosRedes from '../screens/DispositivosRedes';
import { createStackNavigator } from '@react-navigation/stack';
import Controlador from '../screens/Controlador';

const Stack = createStackNavigator();
function StartStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Bluetooth" component={Bluetooth} />
      <Stack.Screen name="Wifi" component={Wifi} />
      <Stack.Screen name="Controlador" component={Controlador} />
      <Stack.Screen name="Ajustes" component={Ajustes} />
      <Stack.Screen name="Configuracion" component={Configuracion} />
      <Stack.Screen name="Dispositivos y Redes" component={DispositivosRedes} />
    </Stack.Navigator>
  );
}

export {StartStack}