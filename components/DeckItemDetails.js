import React, { Component } from 'react'
import { getDeck } from '../utils/api'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
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
        <Text>{title}</Text>
        <Text>{cards && cards.length}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.props.navigation.navigate('AddCard', { deck })}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.props.navigation.navigate('Quiz', { deck })}
        >
          <Text>Take Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 60,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
  },
})

export default DeckItemDetails
