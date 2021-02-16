import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigators/BottomTabNavigator';

import { AppProvider } from './src/context/AppContext';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
        <AppProvider>
          <NavigationContainer>
            <BottomTabNavigator/>
          </NavigationContainer>
        </AppProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
