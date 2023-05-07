import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';
const imglink ={uri:"https://img.freepik.com/free-photo/person-working-building-construction_23-2149184942.jpg?w=740&t=st=1682465893~exp=1682466493~hmac=4e0a8e26853aa8ec088bb823fc7d236211268101842ce124988981c091504c08"}
const { width, height } = Dimensions.get('window');

const Spacer = ({ height }) => {
  return <View style={{ height: height }} />;
};

export const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    // Do something with the user's input here
  };

  return (
    <ImageBackground source={imglink} resizeMode= "cover" 
    style={styles.backgroundImage}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Input
        placeholder="Entrer votre nom et prénom "
        onChangeText={(text) => setUsername(text)}
        value={username}
        containerStyle={{ height: 50, width: 378 ,  }}
        inputStyle={{ fontSize: 22 }}
        inputContainerStyle={{ backgroundColor: '#DFDDDD' , borderRadius: 50 }}

      />
      <Spacer height={15} />

      <Input
        placeholder="Entrer votre email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        containerStyle={{ height: 50, width: 378 }}
        inputStyle={{ fontSize: 22 }}
        inputContainerStyle={{ backgroundColor: '#DFDDDD', borderRadius: 50 }}

      />
      <Spacer height={15} />

      <Input
        placeholder="Entrer votre mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        containerStyle={{ height: 50, width: 378 }}
        inputStyle={{ fontSize: 22 }}
       inputContainerStyle={{ backgroundColor: '#DFDDDD', borderRadius: 50 }}

      />
      <Spacer height={15} />

      <Input
        placeholder="Confirmer votre mot de passe "
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        containerStyle={{ height: 50, width: 378 }}
        inputStyle={{ fontSize: 22 }}
        inputContainerStyle={{ backgroundColor: '#DFDDDD', borderRadius: 50}}

      />
      <Spacer height={15} />

     
      <Button
        title="S'inscrire"
        onPress={handleSignup}
        buttonStyle={{ backgroundColor: '#0408a3', height: 50, width: 325 , borderRadius: 11 }}
        titleStyle={{ fontWeight: 'semiBold', fontSize: 20 }}


      />
            <Text>Vous avez déjà un compte? connecter</Text>
     
    
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


