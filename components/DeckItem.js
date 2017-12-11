import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  deckItem: {
    height: 100,
    backgroundColor: 'red',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export const DeckItem = ({ deck, nav }) => {
  const len = deck.item.cards.length
  return (
    <TouchableOpacity
      style={styles.deckItem}
      onPress={()=> nav.navigate('DeckItemDetails', {deck: deck.item})}
    >
      <Text>{deck.item.title}</Text>
      <Text>{len} Card{ (len > 1 || len === 0) && 's'}</Text>
    </TouchableOpacity>
  )
}
