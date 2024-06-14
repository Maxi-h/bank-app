import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {CommonStackParamList} from '../screens';
// import {NAVIGATION} from '../utils/constants';
import FormView from '../presentation/screens/FormView';
import HomeView from '../presentation/screens/HomeView';
import DetailsView from '../presentation/screens/DetailsView';
import {RootStackParamList, initialParam} from '../presentation/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  //cardStyle: { backgroundColor: theme.colors.white },
  headerShown: false,
};

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={'HomeView'}>
      <Stack.Screen
        component={HomeView}
        name={'HomeView'}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={FormView}
        name={'FormView'}
        initialParams={{data: initialParam, option: 'create'}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailsView}
        name={'DetailsView'}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
