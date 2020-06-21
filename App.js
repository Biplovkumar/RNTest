import * as React from 'react';
import { YellowBox, Platform, StatusBar } from 'react-native';
import Colors from "./src/Utils/Colors";
import MainNavigator from './src/Navigator/index';
StatusBar.setBarStyle('light-content');
if (Platform.OS != 'ios') { StatusBar.setBackgroundColor(Colors.Black); }
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested'])

function App() {
  return (
    <MainNavigator/>
  );
}

export default App;