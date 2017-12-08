import React from 'react';
import { StyleSheet, Text, View, TabNavigator } from 'react-native';
import Decks from './components/Decks'
import { setInitData, getDecks } from './utils/api'
import { objectToArray } from './utils/helpers'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// Tabs = TabNavigator({ Decks: {
//     screen: Decks
//   }
// })
export default class App extends React.Component {
  state = {
    decks: []
  }
  componentDidMount() {
    setInitData()
      .then(getDecks)
      .then((decks)=> this.setState({decks: objectToArray(decks)}))
  }
  render() {
    const { decks } = this.state
    return (
      <View style={styles.container}>
        <Decks decks={decks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    flex: 1,
    backgroundColor: 'red',
  }
});
