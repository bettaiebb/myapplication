import React, { useState } from 'react';
import { View} from 'react-native';
import { Input, Button } from 'react-native-elements';

import signincreen from '../signinscreen/signinscreen';
//import { useNavigation } from '@react-navigation/native';
//const Stack = createStackNavigator();



const Spacer = ({ height }) => {
    return <View style={{ height: height }} />;
  };
  
   
export const Registerscreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 // const navigation = useNavigation();
    function handleSavePassword() {
        // Insérez votre code ici pour enregistrer le nouveau mot de passe
        //navigation.navigate('signinscreen');
      };
  return (
    <View>
       <Input
        placeholder="Entrer votre nouveau mot de passe"
        value={newPassword}
        onChangeText={setNewPassword}
        containerStyle={{ height: 50, width: 378 }}
        inputStyle={{ fontSize: 22 }}
        inputContainerStyle={{ backgroundColor: '##eded43', borderRadius: 50 }}
/>
<Spacer height={15} />
        <Input
        placeholder="confirmer votre nouveau mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        containerStyle={{ height: 50, width: 378 }}
        inputStyle={{ fontSize: 22 }}
        inputContainerStyle={{ backgroundColor: '#eded43', borderRadius: 50 }}
      />
<Spacer height={15} />
      <Input
        placeholder="numéro de téléphone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        containerStyle={{ height: 50, width: 378 }}
        inputStyle={{ fontSize: 22 }}
        inputContainerStyle={{ backgroundColor: '#eded43', borderRadius: 50 }}/>
        <Spacer height={15} />
        <Button
        title="enregistrer"
        onPress={handleSavePassword}
        buttonStyle={{ backgroundColor: '#43aaed', height: 50, width: 325 , borderRadius: 11 }}
        titleStyle={{ fontWeight: 'semiBold', fontSize: 20 }}/>
    </View>
  )
}

