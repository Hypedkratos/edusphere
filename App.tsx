import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Loginscreen from './screens/Loginscreen'

const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Loginscreen' component={Loginscreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})