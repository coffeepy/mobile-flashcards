import React from 'react'
import { StatusBar, View } from 'react-native'
import { gray } from '../utils/colors'
import { Constants } from 'expo'

const FlashCardsStatusBar = () => {
  return (
    <View style={{backgroundColor: gray, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={gray} barStyle='light-content' />
    </View>
  )
}

export default FlashCardsStatusBar
