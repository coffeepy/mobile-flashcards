import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Score from './components/Score'
import Tabs from './components/Tabs'
import DeckItemDetails from './components/DeckItemDetails'
import FlashCardsStatusBar from './components/StatusBar'
import { getDecks, saveDeckTitle, addCardToDeck, removeDeck } from './utils/api'
import { objectToArray, setLocalNotification, resetToDeck } from './utils/helpers'
import { white, gray } from './utils/colors'

mainNavOpts = {
  headerMode: 'float',
  navigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: gray,
    }
  }
}
MainNav = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckItemDetails: {
    screen: DeckItemDetails,
    navigationOptions: {
      title: 'Deck',
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  Score: {
    screen: Score,
    navigationOptions: {
      header: null,
      // title: 'Score',
    },
  },
},mainNavOpts)


export default class App extends React.Component {
  state = {
    decks: []
  }
  getDecksAndSetState = () => {
    return getDecks()
      .then((decks)=> this.setState({decks: objectToArray(decks)}))
  }
  componentDidMount() {
    setLocalNotification()
    this.getDecksAndSetState()
  }
  submitCard = (deck, card, navigation) => {
    return addCardToDeck(deck.title, card)
      .then(()=>  navigation.dispatch(resetToDeck(deck)) )
      .then(this.getDecksAndSetState)
  }
  submitDeck = (deckTitle) => {
    return saveDeckTitle(deckTitle)
      .then(this.getDecksAndSetState)
  }
  removeDeck = (deckTitle) => {
    return removeDeck(deckTitle)
      .then(this.getDecksAndSetState)
  }
  render() {
    const { decks } = this.state
    screenProps = {
      decks,
      submitDeck: this.submitDeck,
      submitCard: this.submitCard,
      removeDeck: this.removeDeck,
    }
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <FlashCardsStatusBar />
        <MainNav
          screenProps={screenProps}
        />
      </View>
    )
  }
}
