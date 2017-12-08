import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const DeckItem = ({ deck }) => {
  const len = deck.item.cards.length
  return (
    <View style={[style.deckItem]}>
      <Text>{deck.item.title}</Text>
      <Text>{len} Card{ len > 1 && 's'}</Text>
    </View>
  )
}
// since this is an object need to switch
class Decks extends Component {
  renderListItem = (deck) => {
    return <DeckItem  deck={deck} />
  }
  keyExtractor = (item, idx) => {
    return idx
  }
  render() {
    const { decks } = this.props
    return (
      <View style={style.decks}>
        <View style={[decks.length && {borderBottomWidth: 1}]}>
          <Text>Decks</Text>
          <FlatList
            data={decks}
            renderItem={this.renderListItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    )
  }
}

style = StyleSheet.create({
  decks: {
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  deckItem: {
    height: 100,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
})
export default Decks
