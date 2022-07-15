import React from 'react';
import 'react-native-gesture-handler';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports'
import Router from './src/navigation/Router';

import { UserContextProvider } from './src/context/userContext';
import SignUp from './src/screens/SignUp';



Amplify.configure(awsconfig);
 
const App = () => {
  
  return (
    <NavigationContainer>
      <UserContextProvider>
        
        <StatusBar barStyle={(Platform.OS === "ios" ? 'dark-content' : 'light-content')} />
    
        <Router/>

      </UserContextProvider>
      
    </NavigationContainer>
  );
};



export default App;
