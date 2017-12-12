import { NavigationActions } from 'react-navigation'
const NOTIFICATION_KEY = 'mobileFlashCards:notification'
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

export const clearNotifications = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
const createNotification = () => {
  return {
    title: 'Dont Forget to Study!',
    body: "😸 You haven't taken a quiz today! If you want, jump in and take one now",
    ios: {
      sound: true
    },
  }
}
export const setLocalNotification = () => {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=> {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              // tommorrow d
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(18)
              tomorrow.setMinutes(0)
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })


}
export const objectToArray = (obj) => {
  return obj && Object.entries(obj).map((arr)=> arr[1])
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
