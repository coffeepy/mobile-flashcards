import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { red, white, gray, darkGray } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'

export default NoDecks = () => {
  return (
    <View style={styles.container}>
      <Ionicons size={80} name='ios-happy' color={red}></Ionicons>
      <Text style={styles.msg}> You have no Decks! Add a deck to start.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    color: gray,
    fontSize: 24,
  },
})
