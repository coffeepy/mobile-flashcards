import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { DeckItem } from './DeckItem'
import { gray, red, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import TitleCard from './TitleCard'


// since this is an object need to switch
class Decks extends Component {
  renderListItem = (deck) => {
    const { navigation, screenProps } = this.props
    return <DeckItem nav={navigation} screenProps={screenProps} deck={deck} />
  }
  keyExtractor = (item, idx) => {
    return idx
  }
  render() {
    const { decks } = this.props.screenProps
    console.log('decks remain', decks)
    return (
      decks && decks.length
       ? <View style={{flex:1}}>
         <TitleCard noDecks={false}/>
         <View style={{flex: 2}}>
          <FlatList
            data={decks}
            renderItem={this.renderListItem}
            keyExtractor={this.keyExtractor}
          />
         </View>
        </View>
      : <TitleCard noDecks={true}/>

    )
  }
}

styles = StyleSheet.create({
  decks: {
    flex: 1,
  },
  titleCard: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderColor: gray,
    borderWidth: 4,
    borderRadius: 4,
    margin: 3,
  }
})
export default Decks
