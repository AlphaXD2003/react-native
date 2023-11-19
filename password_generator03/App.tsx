import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Form validation
import * as yup from 'yup'

const PasswordSchema = yup.object().shape({
  passwordLength: 
  yup
  .number()
  .min(4 , 'Should be greater than 3')
  .max(16 , 'Should be less than 17').required('Required')
  .required('Required Field')
})

export default function App() {
  const [password, setPassword] = React.useState('')
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})