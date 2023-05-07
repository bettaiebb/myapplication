/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Signinscreen} from './screens/signinscreen/signinscreen';
import {ProfileSelectionScreen} from './screens/ProfileSelectionScreen/ProfileSelectionScreen';
import auth from '@react-native-firebase/auth';
import {Text} from 'react-native-elements';

const Stack = createStackNavigator();
const Home = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={Signinscreen} />
        <Stack.Screen name="profil" component={ProfileSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
