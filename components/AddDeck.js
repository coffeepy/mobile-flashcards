import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class AddDeck extends Component {
  state = {
    val: '',
  }
  onTextChange = (val) => {
    return this.setState({val})
  }
  onPress = () => {
    const { submitDeck } = this.props.screenProps
    submitDeck(this.state.val)
      .then(()=> this.props.navigation.navigate('Home'))
  }
  render() {
    const { val, submitted } = this.state
    const { navigation } = this.props
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>New Deck Title</Text>
        <TextInput
          value={val}
          onChangeText={this.onTextChange}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={this.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
export default AddDeck
