import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { DeckItem } from './DeckItem'

// since this is an object need to switch
class Decks extends Component {
  renderListItem = (deck) => {
    const { navigation } = this.props
    return <DeckItem nav={navigation} deck={deck} />
  }
  keyExtractor = (item, idx) => {
    return idx
  }
  render() {
    const { decks } = this.props.screenProps

    return (
      <View style={styles.decks}>
        <View style={[decks && decks.length && {borderBottomWidth: 1}]}>
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

styles = StyleSheet.create({
  decks: {
    flex: 1,
  },
})
export default Decks
