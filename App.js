import React from 'react';
import Login from './Screen/Login';
import Add from './Screen/Add_product';
import MenuList from './Screen/Menu_list';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuButton from './Screen/MenuButton';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

      <Stack.Screen
          name="MenuButton"
          component={MenuButton}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MenuList"
          component={MenuList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Add"
          component={Add}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
