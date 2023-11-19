import { ScrollView, StyleSheet, Text, TouchableOpacityBase, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.cardElevated , styles.cardTwo]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated , styles.cardThree]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated , styles.cardOne]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated , styles.cardFour]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 20,
    },
    container:{
      flex: 1,
      flexDirection: 'row',
      padding: 15,
      // marginTop: 20,
    },
    card:{
      height: 100,
      width: 100,
      borderRadius: 10,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 1,
  
    },
    cardOne:{
      backgroundColor: 'red',
    },
    cardTwo:{
      backgroundColor: 'blue',
    },
    cardThree:{
      backgroundColor: 'green',
    },
    cardFour:{
      backgroundColor: 'black',
    },
    cardElevated:{
        backgroundColor: '#CAD5E2', // '#CAD5E2' is a light blue
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'red',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
  });