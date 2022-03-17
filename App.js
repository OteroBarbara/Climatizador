import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StartStack } from './routes/StartStack';
import { Provider } from 'react-redux';
//import {store} from './store/store';
import {createStore} from 'redux';
import { counterReducer } from './store/reducer';

const store = createStore(counterReducer);


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StartStack />
      </NavigationContainer>
    </Provider>
  );
}
