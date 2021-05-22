import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import MainScreen from './Screen/MainScreen';
import ChallengeListScreen from './Screen/ChallengeListScreen';

const Router = createStackNavigator( {
    MainScreen: {
      screen: MainScreen,
    },
    ChallengeListScreen: {
      screen: ChallengeListScreen
    }
} );

const App = createAppContainer(Router);

export default App;
