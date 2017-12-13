import React, { Component } from 'react'
import { getDeck } from '../utils/api'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import ThumbButtons from './ThumbButtons'
import CardCount from './CardCount'
import { red, gray, white } from '../utils/colors'

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
        <View style={styles.container}>
          <View style={[styles.deck]}>
            <View style={[styles.deck, { flex: 1 }]}>
              <View style={[styles.deck, { flex: 1, alignItems: 'stretch'}]}>
                <View style={{backgroundColor: red, height: 80, alignItems:'center', justifyContent: 'center'}}>
                  <Text style={styles.title}>{title}</Text>
                </View>
                <View style={[styles.container, {justifyContent: 'center', alignSelf: 'center'}]}>
                  <CardCount cards={cards} style={{fontSize: 40}}/>
                </View>
              </View>
            </View>
          </View>
        </View>
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
  title: {
    fontSize: 24,
    color: white,
  },
  deck: {
    height: 300,
    width: 380,
    margin: 1,
    borderColor: gray,
    borderWidth: 2,
    shadowColor: gray,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
})

export default DeckItemDetails
