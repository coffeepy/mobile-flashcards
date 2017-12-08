import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import DeckItemDetails from './components/DeckItemDetails'
import { setInitData, getDecks, saveDeckTitle } from './utils/api'
import { objectToArray } from './utils/helpers'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

Tabs = TabNavigator({
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

MainNav = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckItemDetails: {
    screen: DeckItemDetails
  },
})



export default class App extends React.Component {
  state = {
    decks: []
  }
  getDecksAndSetState = () => {
    return getDecks()
      .then((decks)=> this.setState({decks: objectToArray(decks)}))
  }
  componentDidMount() {
    setInitData()
      .then(this.getDecksAndSetState)
  }
  submitDeck = (title) => {
    return saveDeckTitle(title)
      .then(this.getDecksAndSetState)
  }
  render() {
    const { decks } = this.state
    screenProps = {
      decks,
      submitDeck: this.submitDeck
    }
    return (
      <View style={styles.container}>
        <MainNav
          screenProps={screenProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    flex: 1,
    backgroundColor: 'red',
  }
});
