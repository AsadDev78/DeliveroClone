import {View, Text} from 'react-native';
import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>

      <TailwindProvider>
        <Navigation/>
      </TailwindProvider>
    </Provider>
    
  );
};

export default App;
