import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}> 
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Black</Text>
        </View>
      </View>
    </View>
  );
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
    width: '20%',
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
  }
});
