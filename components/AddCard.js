import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import { red, gray, darkGray } from '../utils/colors'
import { MaterialIcons } from '@expo/vector-icons'
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
    return this.setState({question:'', answer:''})
  }
  render() {
    const { question, answer } = this.state
    const { navigation } = this.props
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.centerStretch}>


            <View style={styles.centerItems}>
              <MaterialIcons size={80} color={red}  name='keyboard'/>
              <Text style={styles.text}>Question</Text>
            </View>
            <TextInput
              value={question}
              style={styles.input}
              onChangeText={(text)=> this.setState({question:text})}
            />
            <View style={styles.centerItems}>
              <Text style={styles.text}>Answer</Text>
            </View>
            <TextInput
              value={answer}
              style={styles.input}
              onChangeText={(text)=> this.setState({answer:text})}
            />
            <KeyboardAvoidingView behavior='padding' style={styles.centerItems}>
              <ThumbButtons
                onPressOne={this.onPress}
                textOne={'Add Card'}
                hideButtonTwo={true}
              />
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  centerStretch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: darkGray,
    fontSize: 24,
    alignSelf: 'center',
  },
  input: {
    height: 60,
    marginLeft: 1,
    marginRight: 1,
    fontSize: 30,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: gray,
  },
})

export default AddCard
