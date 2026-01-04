

import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RNBootSplash from "react-native-bootsplash";


function App() {
  const isDarkMode = useColorScheme() === 'dark';

 useEffect(() => {
      RNBootSplash.hide({ fade: true });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
export default App;
