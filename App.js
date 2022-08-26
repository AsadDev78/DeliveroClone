import {View, Text} from 'react-native';
import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    
      <TailwindProvider>
        <Navigation/>
      </TailwindProvider>
    
  );
};

export default App;
