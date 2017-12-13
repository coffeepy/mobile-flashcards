import React from 'react'
import { Text } from 'react-native'

export default CardCount = ({ style, cards }) => {
  const len =  cards && cards.length
  return <Text style={style || {}}>{len} Card{ (len > 1 || len === 0) && 's'}</Text>
}
