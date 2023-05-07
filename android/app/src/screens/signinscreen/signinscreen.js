import { View, StyleSheet, Text,  ImageBackground, Dimensions, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
const imglink ={uri:"https://img.freepik.com/free-photo/sexy-brunette-woman-leather-jacket-putting-helmet-sitting-retro-style-motorcycle-beautiful-sunny-day_342744-694.jpg?w=740&t=st=1682465518~exp=1682466118~hmac=7a51829860bd744e3a3e1a0abfde9ab3e9c6abcce1b876d8cd0fcabc3b834181"}
const { width, height } = Dimensions.get('window');
const Spacer = ({ height }) => {
  return <View style={{ height: height }} />;
};
const Stack = createStackNavigator();
const Signinscreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
    
    const signin  = () =>{
      if (email===""|| password==="" ){
        Alert.alert(
          "invalide détails",
          "Veuillez remplir tous les champs",
          [
            {
              text: "Annuler",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false },
        );
      }else{
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('Utilisateur connecté !');
          })
          .catch(error => {
            if (error.code === 'auth/wrong-password') {
              console.log('Mot de passe incorrect!');
            }
  
            if (error.code === 'auth/user-not-found') {
              console.log('Aucun utilisateur trouvé avec cet email!');
            }
  
            console.error(error);
          });
  
      }
    
  
    }
        
  return (
  
       <ImageBackground source={imglink} resizeMode= "cover" 
    style={styles.backgroundImage}>
    
        
            <View style={{justifyContent:"center", alignItems:"center", marginTop:100}}>
                <Text style={{fontSize:18, color:"#0d0d0c", fontWeight:"600"}}> Connectez-vous à votre compte </Text>
            </View>
            <Spacer height={80} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
             <Input 
               placeholder='Entrer votre email' 
               value={email}
               onChangeText={(text) => setEmail(text)}
               secureTextEntry={true}
               containerStyle={{ height: 50, width: 378 ,  }}
               inputStyle={{ fontSize: 22 }}
               inputContainerStyle={{ backgroundColor: '#DFDDDD' , borderRadius: 50 }}
                style={{marginLeft:13, marginVertical:10,}}/> 
             <Spacer height={15} />
           
              <Input 
               placeholder='taper votre mot de passe' 
               value={password}
               secureTextEntry={true}
               onChangeText={(text) => setPassword(text)}
               containerStyle={{ height: 50, width: 378 ,  }}
               inputStyle={{ fontSize: 22 }}
               inputContainerStyle={{ backgroundColor: '#DFDDDD' , borderRadius: 50 }}
               style={{marginLeft:13, marginVertical:10,}} />    
               <Spacer height={100} />   
             <Button

        title="connecter"
        onPress={signin}
        
        buttonStyle={{ backgroundColor: '#fbf63b', height: 50, width: 325 , borderRadius: 11 }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        />
       
    <Text style={{color:"#757569", fontSize:20, textAlign:"center",fontWeight:"700"}}>mot de passe oublié?</Text>

           </View>
    </ImageBackground>
   
  )
}

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
})
export default Signinscreen;
