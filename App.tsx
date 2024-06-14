import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import {useNavigationMounting} from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';

const App = () => {
  useNavigationMounting();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Router />
    </GestureHandlerRootView>
  );
};

export default App;
