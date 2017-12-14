import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white, red, darkGray, gray } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import CardCount from './CardCount'

const styles = StyleSheet.create({
  itemCont: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    backgroundColor: red,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: darkGray,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    padding: 8,
  },
  info: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  endMenu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  titleText: {
    color: white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: white,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    margin: 4,
    borderColor: white,
  },
})
export const DeckItem = ({ deck, nav, screenProps }) => {
  return (
    <TouchableOpacity style={styles.itemCont}
      onPress={()=> nav.navigate('DeckItemDetails', {deck: deck.item})}
    >
      <View style={styles.icon}>
        <Ionicons style={styles.icon} color={white} size={60} name='ios-card-outline'/>
      </View>
      <View style={styles.info}>
        <Text style={styles.titleText}>{deck.item.title}</Text>
        <CardCount style={styles.subTitle} cards={deck.item.cards}/>
      </View>
      <View style={styles.endMenu}>
        <TouchableOpacity
          onPress={()=> screenProps.removeDeck(deck.item.title)}
        >
          <Ionicons style={{margin: 4}} color={white} size={30} name='ios-trash-outline'/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
