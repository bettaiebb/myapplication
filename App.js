/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  StyleSheet
} from 'react-native';


import Signinscreen from './android/app/src/screens/signinscreen/signinscreen';
import ProfileSelectionScreen from './android/app/src/screens/ProfileSelectionScreen/ProfileSelectionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signinscreen} />
      <Stack.Screen name="Sélection de profil" component={ProfileSelectionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
   
   
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
  },
container:{
  flex:1,

}
});

export default App;
