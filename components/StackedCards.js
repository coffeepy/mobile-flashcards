import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { red, gray, white } from '../utils/colors'

class StackedCards extends Component {
  render() {
    const {topCardTitle, topCardbody, titleStyle} = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.deck]}>
          <View style={[styles.deck, { flex: 1 }]}>
            <View style={[styles.deck, { flex: 1, alignItems: 'stretch'}]}>
              <View style={[{backgroundColor: red, height: 80, alignItems:'center', justifyContent: 'center'}, titleStyle]}>
                {topCardTitle}
              </View>
              <View style={[styles.container, {justifyContent: 'center', alignSelf: 'center'}]}>
                {topCardbody}
              </View>
            </View>
          </View>
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

export default StackedCards
