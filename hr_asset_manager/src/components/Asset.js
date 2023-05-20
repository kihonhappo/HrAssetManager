import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik'
const Asset = () => {
  return (
    <Formik>
      <View>
        <Text>Username</Text>
        <TextInput style={styles.input}/>
        <Text>Password</Text>
        <TextInput style={styles.input}/>
        <Button title="Submit"/>
      </View>
    </Formik>
  )
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default Asset;