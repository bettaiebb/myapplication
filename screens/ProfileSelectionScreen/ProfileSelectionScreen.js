import { StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native'
import React from 'react'

export const ProfileSelectionScreen= () => {

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Veuillez sélectionner l'option correspondant à votre profil</Text>
        </View>
        <View style={styles.buttonWrapper}>
         <TouchableOpacity style={styles.button}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-photo/young-caucasian-man-with-motorcycle-helmet-isolated-white-background-looking-side-smiling_1368-316631.jpg?w=740' }}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Motocycliste</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/thoughtful-young-male-engineer-wearing-safety-helmet-uniform-holding-note-pad-pencil-keeping-hand-chin-looking-side-isolated-blue-background_141793-132830.jpg?w=740&t=st=1682518837~exp=1682519437~hmac=aaa8f47ca61538fc27a7bfd65f37e1ceb8b4aa3c92c06596fa65c0acc28448bd' }}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Mineur</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.button}>
            <Image
              source={{ uri: 'https://www.mundobici.co/wp-content/uploads/2021/06/male-cyclist-wearing-helmet.jpg' }}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Cycliste</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
     width: '100%',
    height: '100%'
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonImage: {
    width: 250,
    height: 150,
    marginBottom: 5,
    borderRadius: 50,

    
  },
  
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0408a3',
  }, 
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



