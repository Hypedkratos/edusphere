import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import loginscreen from './screens/loginscreen'

const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <ScrollView>
      <Stack.Screen options={{headerShown:false}} name="login" component={loginscreen}></Stack.Screen>
    </ScrollView>
    <Text>hi</Text>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})