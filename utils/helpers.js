import { NavigationActions } from 'react-navigation'

export const objectToArray = (obj) => {
  return Object.entries(obj).map((arr)=> arr[1])
}

export const resetToDeck = (deck) => (
    NavigationActions.reset({
      // which index to load in the array
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({ routeName: 'DeckItemDetails', params: { deck } }),
      ],
    })
  )

export const resetToHome =
    NavigationActions.reset({
      // which index to load in the array
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
      ],
    })
