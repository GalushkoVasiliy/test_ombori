import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MainPage from '../screens/MainPage/MainPage';

const Stack = createStackNavigator();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="Users">
       <Stack.Screen
        name="Users"
        component={MainPage}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator;