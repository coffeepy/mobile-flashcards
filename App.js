import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Tabs from './components/Tabs'
import DeckItemDetails from './components/DeckItemDetails'
import { setInitData, getDecks, getDeck, saveDeckTitle, addCardToDeck  } from './utils/api'
import { objectToArray } from './utils/helpers'

MainNav = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Decks'
    }
  },
  DeckItemDetails: {
    screen: DeckItemDetails
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz 
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
  submitCard = (deck, card, navigation) => {
    return addCardToDeck(deck.title, card)
      .then(this.getDecksAndSetState)
      .then(()=> navigation.navigate('DeckItemDetails', { deck }))
  }
  submitDeck = (deckTitle) => {
    return saveDeckTitle(deckTitle)
      .then(this.getDecksAndSetState)
  }
  render() {
    const { decks } = this.state
    screenProps = {
      decks,
      submitDeck: this.submitDeck,
      submitCard: this.submitCard,
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
