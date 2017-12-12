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
      console.log('Decks', JSON.parse(obj));
      return JSON.parse(obj)
    })
}

// return a single Deck
export const getDeck = (deckTitle) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((obj)=> {
      console.log('getDeck', JSON.parse(obj)[deckTitle])
      return JSON.parse(obj)[deckTitle]
    })
}

export const saveDeckTitle = (deckTitle) => {
  deck = {
    [deckTitle]: {
      title: deckTitle,
      cards: []
    }
  }
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
    .then((obj)=> {
      console.log('added item', obj)
      getDecks()
    })
}

export const addCardToDeck = (deckTitle, card) => {
  console.log('deckTtile', deckTitle)
  return getDeck(deckTitle)
          .then((deck) => {
            console.log('add before', deck)
            deck.cards.push(card)
            console.log('add after', deck)
            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[deckTitle]:deck}))
          }).then(() => getDecks())
}

// just for initial testing
export const setInitData= () => {
  const initData = {
    "Deck One": {
      title: 'Deck One',
      cards: [
        {
          'question': 'Whats Up?',
          'answer': 'Nada',
        },
        {
          'question': 'Whats Up Again?',
          'answer': 'Nada',
        },
        {
          'question': 'Whats Up Finally?',
          'answer': 'Nada',
        },
      ],
    },
    "Deck Two": {
      title: 'Deck Two',
      cards: [
        {
          'question': 'Whats Up?',
          'answer': 'stop asking',
        },
      ],
    },
  }
  // resetting each time
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
  // .then(()=>
  //   AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initData))
  // )
}
