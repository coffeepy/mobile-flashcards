import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import { gray, red, white } from '../utils/colors'

export default TitleCard = ({ noDecks }) => {
  return(
     <View style={styles.titleCard}>
       {
         noDecks
            ? <MaterialCommunityIcons color={red} size={100} name='emoticon-cool'/>
            : <FontAwesome name='hand-pointer-o' color={red} size={37}/>
       }
       <Text style={{color: gray, fontSize: 30}}>
         {noDecks ? 'You Have No Decks! Add a Deck to Start' : 'Touch a Deck to Get Started!'}
       </Text>
     </View>
  )
}
styles = StyleSheet.create({
  titleCard: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderColor: gray,
    borderWidth: 4,
    borderRadius: 4,
    margin: 3,
  }
})
