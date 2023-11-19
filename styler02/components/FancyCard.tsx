import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card ]}>
        <Image
            style={[styles.cardImage]}
            source={{uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'}}
        />
        <View style={[styles.cardBody , styles.cardElevated]}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDiscription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card:{
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,

    },
    cardElevated:{
      backgroundColor: 'white',
      color: 'black',
      elevetion: 3,
      shadowOffset: {
        width: 1,
        height: 1
      },
    },
    cardImage:{
        height: 200,
        // width:100
        // marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 10,

    },
    cardBody:{
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,

    },
    cardTitle:{
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    cardLabel:{
      color: 'black',
      fontSize: 14,
      marginBottom: 6,
    }
    ,
    cardDiscription:{
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 12,
      flexShrink: 1,
      marginTop: 6,
    },
    cardFooter:{
      color: 'black',
    },
})