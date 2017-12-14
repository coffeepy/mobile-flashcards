import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, gray, darkGray, white } from '../utils/colors'
import ThumbButtons from './ThumbButtons'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }
  onPress = () => {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    this.props.screenProps.submitCard(deck, this.state, navigation)
    this.setState({question:'', answer:''})
  }
  render() {
    const { question, answer } = this.state
    const { navigation } = this.props
    return(
      <TouchableWithoutFeedback >
        <KeyboardAvoidingView>
          <MaterialIcons size={80} color={red} style={{alignSelf:'center'}} name='keyboard'/>
          <KeyboardAvoidingView>
            <Text style={styles.text}>Question</Text>
            <TextInput
              value={question}
              style={styles.input}
              onChangeText={(text)=> this.setState({question:text})}
            />
            <Text style={styles.text}>Answer</Text>
            <TextInput
              value={answer}
              style={styles.input}
              onChangeText={(text)=> this.setState({answer:text})}
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView style={[{alignSelf: 'center'}]}>
            <ThumbButtons
              onPressOne={this.onPress}
              textOne={'Add Card'}
              hideButtonTwo={true}
            />
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: darkGray,
    fontSize: 24,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  input: {
    height: 60,
    marginLeft: 1,
    marginRight: 1,
    alignSelf: 'stretch',
    fontSize: 30,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: gray,
  },
})
// const styles = StyleSheet.create({
//   input: {
//     height: 60,
//     width: 400,
//     fontSize: 30,
//     borderWidth: 1,
//     borderColor: 'blue',
//   },
//   button: {
//     backgroundColor: 'blue',
//     height: 60,
//     width: 400,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   buttonText: {
//     color: 'white',
//   },
// })

export default AddCard
