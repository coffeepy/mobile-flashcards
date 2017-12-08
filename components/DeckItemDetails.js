import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class DeckItemDetails extends Component {
  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.cards.length}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
