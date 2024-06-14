import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './AppNavigator';
import {navigationRef} from './RootNavigation';

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
