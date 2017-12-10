import React, { Component } from 'react'
import { getDeck } from '../utils/api'
import Score from './Score'
import  { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
class Quiz extends Component {
  state = {
    card: 0,
    deck: {},
    question: '',
    answer: '',
    showAnswer: false,
    quizComplete: false,
    rightAnswers: 0,
    cardCount: 1,
  }
  componentDidMount() {
    const { deck } = this.props.navigation.state.params
    // ensures we dont get a stale deck
    getDeck(deck.title)
      .then((freshDeck)=> {
        this.setState({
          deck: freshDeck,
          question: freshDeck.cards[0].question,
          answer: freshDeck.cards[0].answer,
          cardCount: freshDeck.cards.length,
        })
      })
  }
  passOrFail = (correct)=> {
    let { card, cardCount, deck, rightAnswers, answer, question } = this.state
    card += 1
    cardCount -= 1
    if (correct) {
      rightAnswers += 1
      console.log('rightAnswer', rightAnswers)
    }
    if (card > cardCount) {
      return this.setState({quizComplete: true, rightAnswers})
    }
    if (card <= cardCount) {
      question = deck.cards[card].question
      answer = deck.cards[card].answer
      return this.setState((state) => ({
        ...state,
        question,
        answer,
        rightAnswers,
        card,
        showAnswer: false,
      }))
    }
  }
  calcScore = ()=>{
    const { rightAnswers, cardCount } = this.state
    return Math.round((rightAnswers / cardCount) * 100)
  }
  componentDidUpdate() {
    const { deck, quizComplete } = this.state
    if (quizComplete) {
      return this.props.navigation.navigate('Score', { score: this.calcScore(), deck })
    }
  }
  render() {
    const { deck, question, answer, card, cardCount, showAnswer } = this.state
    return(
       <View style={styles.container}>
        <Text>{card + 1}/{cardCount}</Text>
        <Text>{cardCount - card} Remaining</Text>
        <Text>
          {showAnswer ? answer : question }
        </Text>
        <TouchableOpacity
          onPress={()=> this.setState({showAnswer: !showAnswer})}
        >
          <Text>{showAnswer ? 'Question': 'Answer'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.passOrFail(true)}
        >
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> this.passOrFail(false)}
        >
          <Text>InCorrect</Text>
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
export default Quiz
