import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }
  onPress = () => {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    console.log('onpress addcard deck', deck);
    this.props.screenProps.submitCard(deck, this.state, navigation)
    this.setState({question:'', answer:''})
  }
  render() {
    const { question, answer } = this.state
    const { navigation } = this.props
    return(
      <KeyboardAvoidingView>
        <Text>Add Card</Text>
        <Text>Question</Text>
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={(text)=> this.setState({question:text})}
        />
        <Text>Answer</Text>
        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={(text)=> this.setState({answer:text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
         <Text>Add Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 400,
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'blue',
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

export default AddCard
