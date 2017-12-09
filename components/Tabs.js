import React from 'react';
import Decks from './Decks'
import AddDeck from './AddDeck'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarIcon: <MaterialCommunityIcons size={30} name='cards-playing-outline'/>,
      tabBarLabel: 'Decks',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarIcon: <MaterialIcons size={30} name='library-add'/>,
      tabBarLabel: 'Add Deck',
    },
  },
})
