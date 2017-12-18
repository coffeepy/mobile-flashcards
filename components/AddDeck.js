import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { red, gray, darkGray, white } from '../utils/colors'

class AddDeck extends Component {
  state = {
    val: '',
  }
  onChangeText = (val) => {
    return this.setState({val})
  }
  onPress = () => {
    const { submitDeck } = this.props.screenProps
    submitDeck(this.state.val)
      .then(()=> {
        this.props.navigation.navigate('DeckItemDetails', { deck: { title: this.state.val }})
        this.setState({val:''})
      })
  }
  render() {
    const { val, submitted } = this.state
    const { navigation } = this.props
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.center}>
          <MaterialCommunityIcons color={red} size={80} name='tag-plus'/>
          <Text style={styles.text}>Label and Create a New Deck</Text>
        </View>
        <TextInput
          value={val}
          onChangeText={this.onChangeText}
          style={styles.input}
          placeHolder='Deck Label'
        />
        <TouchableOpacity
          onPress={this.onPress}
          style={[styles.button, styles.center]}
        >
          <Text style={styles.buttonText}>Create a Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    color: darkGray,
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 60,
    marginLeft: 1,
    marginRight: 1,
    fontSize: 30,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: gray,
  },
  button: {
    backgroundColor: red,
    height: 60,
    marginLeft: 1,
    marginRight: 1,
    borderColor: darkGray,
    borderWidth: 1,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  buttonText: {
    color: white,
  },
})
export default AddDeck
