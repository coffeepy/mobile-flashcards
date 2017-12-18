import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { red, white, darkGray } from '../utils/colors'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

class ThumbButtons extends Component {
  render() {
    const { hideButtonTwo, onPressOne, onPressTwo, textOne, textTwo, } = this.props
    return(

      <View style={styles.container}>
        <View >
          <TouchableOpacity style={styles.button}
            onPress={onPressOne}
          >

            <Text style={styles.text}>{textOne}</Text>
            <Ionicons name='ios-add-circle' size={80} color={red}/>
          </TouchableOpacity>
        </View>
        <View >
          {
            !hideButtonTwo &&
              <TouchableOpacity style={styles.button}
                onPress={onPressTwo}
              >
                <Text style={styles.text}>{textTwo}</Text>
                <FontAwesome name='question-circle' size={80} color={red}/>
              </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  text: {
    color: darkGray,
    fontSize: 18,
  }
})

export default ThumbButtons
