import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState , useEffect } from 'react'

export default function App() : JSX.Element{
  const [bgColor, setBgColor] = useState("#ffffff")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setBgColor(color);
  }

  return (
    <>
      <StatusBar
      backgroundColor={"#000000"}
      />
      <View style={[styles.container , {backgroundColor: bgColor}]}>
        <TouchableOpacity 
        onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  actionBtn:{
    backgroundColor:"#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:40,
    borderRadius:12
  },
  actionBtnText:{
    color:"#ffffff",
    fontSize:24,
    fontWeight:"bold",
    textTransform:"uppercase"
  }
})