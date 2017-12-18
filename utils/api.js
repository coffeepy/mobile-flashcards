import { AsyncStorage } from 'react-native'
// note to self and theory not really discussed, this key below is in imitation of
// the previous project, seems they are using a really unique key so its easy to
// identify the storage belongs to the specific app. At first i thought this was doing
// some odd string split and then making an object like mobileFlashCards: { Decks: {}}
// turns out its just { "mobileFlashCards:decks" : {...data}}
const DECK_STORAGE_KEY = 'mobileFlashCards:decks'

// get All Decks
export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((obj)=> {
      return JSON.parse(obj)
    })
}

// return a single Deck
export const getDeck = (deckTitle) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((obj)=> {
      return JSON.parse(obj)[deckTitle]
    })
}

// remove a single Deck
export const removeDeck = (deckTitle) => {
  return getDecks()
    .then((decks)=> {
      delete decks[deckTitle]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    })
}
// Add a new deck
export const saveDeckTitle = (deckTitle) => {
  deck = {
    [deckTitle]: {
      title: deckTitle,
      cards: []
    }
  }
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
    .then((obj)=> {
      getDecks()
    })
}
// add a card to a deck
export const addCardToDeck = (deckTitle, card) => {
  return getDeck(deckTitle)
          .then((deck) => {
            deck.cards.push(card)
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[deckTitle]:deck}))
          }).then(() => getDecks())
}
