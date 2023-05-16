import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/RootNavigtor';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
