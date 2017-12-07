import { AsyncStorage } from 'react-native'
// note to self and theory not really discussed, this key below is in imitation of
// the previous project, seems they are using a really unique key so its easy to
// identify the storage belongs to the specific app. At first i thought this was doing
// some odd string split and then making an object like mobileFlashCards: { Decks: {}}
// turns out its just { "mobileFlashCards:decks" : {...data}}
const DECK_STORAGE_KEY = `mobileFlashCards:decks`

// get All Decks
export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((obj)=> {
      console.log('Decks', obj);
    })
}

// return a single Deck
export const getDeck = (deck) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((obj)=> {
      return JSON.parse(obj)[deck]
    })
}

// just for initial testing
export const setInitData= () => {
  const initData = {
    DeckOne: {
      title: 'Deck One',
      questions: [
        {
          'question': 'Whats Up?',
          'answer': 'Nada',
        },
      ],
    },
    DeckTwo: {
      title: 'Deck Two',
      questions: [
        {
          'question': 'Whats Up?',
          'answer': 'Nada',
        },
      ],
    },
  }
  AsyncStorage.removeItem(DECK_STORAGE_KEY)
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initData))
    .then(() => {
      AsyncStorage.getAllKeys().then((keys)=> console.log('keys', keys))
      getDecks()
      getDeck('DeckOne')
    })
}
