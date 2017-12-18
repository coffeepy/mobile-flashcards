import React, { Component } from 'react'
import { getDeck } from '../utils/api'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import ThumbButtons from './ThumbButtons'
import CardCount from './CardCount'
import { red, gray, white } from '../utils/colors'
import StackedCards from './StackedCards'

class DeckItemDetails extends Component {
  state = {
    deck: {}
  }
  componentDidMount() {
    const { deck } = this.props.navigation.state.params
    // ensures we dont get a stale deck
    getDeck(deck.title)
      .then((freshDeck)=> this.setState({deck: freshDeck}))
  }
  render() {
    const { deck } = this.state
    const { title, cards } = deck
    return (
      <View style={styles.container}>
        <StackedCards
          topCardTitle={<Text style={styles.title}>{title}</Text>}
          topCardbody={<CardCount cards={cards} style={{fontSize: 40}}/>}
        />
        <View style={{flex:1}} >
          <ThumbButtons
            textOne={'Add Card'}
            textTwo={'Pop Quiz'}
            onPressOne={()=> this.props.navigation.navigate('AddCard', { deck })}
            onPressTwo={()=> this.props.navigation.navigate('Quiz', { deck })}
            hideButtonTwo={cards && !cards.length > 0}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: white,
  },
})

export default DeckItemDetails
