import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StartStack } from './routes/StartStack';

export default function App() {
  return (
    <NavigationContainer>
      <StartStack />
    </NavigationContainer>
  );
}
