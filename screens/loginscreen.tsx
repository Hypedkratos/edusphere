import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Homescreen from './Homescreen'

const Loginscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () =>{  
  console.log('Email:', email);
  console.log('Password:', password);
  //Logic for submission goes here
  
  }
  const navigateToPickupscreen = () => {
    navigation.navigate('Homescreen');
  };

  const navigation=useNavigation();
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <TouchableOpacity style={styles.button} 
       onPress={()=>{
        handleLogin();
        navigateToPickupscreen();
      }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Loginscreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  }, 
  input:{
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
  }
})