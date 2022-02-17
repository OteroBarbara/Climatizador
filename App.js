import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StartStack } from './routes/StartStack';
import { global } from './styles/global';

export default function App() {
  return (
    <NavigationContainer>
      <StartStack />
    </NavigationContainer>
  );
}
