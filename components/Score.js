import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { resetToDeck } from '../utils/helpers'

export default Score = ({ navigation}) => {
  const { score, deck } = navigation.state.params
  return (
    <View>
      <Text>You're Score is {score}%</Text>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Quiz', { deck })}
      >
        <Text>Retake Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.dispatch(resetToDeck(deck))}
      >
        <Text>Go Back to "{deck.title}"</Text>
      </TouchableOpacity>
    </View>
  )
}
