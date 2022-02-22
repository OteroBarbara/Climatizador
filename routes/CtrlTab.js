import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ControladorOn from '../screens/ControladorOn';
import ControladorOff from '../screens/ControladorOff';
import ControladorOnManual from '../screens/ControladorOnManual';
import ControladorOnLucesOn from '../screens/ControladorOnLucesOn';
import ControladorOnNocturno from '../screens/ControladorOnNocturno';

function CtrlTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}>
            <Tab.Screen name="On" component={ControladorOn} 
            options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }}/>
            <Tab.Screen name="Off" component={ControladorOff} 
            options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }}/>
            <Tab.Screen name="Manual" component={ControladorOnManual} 
            options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }}/>
            <Tab.Screen name="LucesOn" component={ControladorOnLucesOn} 
            options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }}/>
            <Tab.Screen name="ModoNocturno" component={ControladorOnNocturno} 
            options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }}/>
        </Tab.Navigator>
    );
}

export default CtrlTab