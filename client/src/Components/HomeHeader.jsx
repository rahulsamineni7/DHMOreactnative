import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HomeHeader = () => {
  return (
    <View>
      <Text style={styles.text}>Nalgonda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40, // Example font size
    fontWeight: 'bold', // Example font weight
    textAlign: 'center', // Example text alignment
    // Add any other styles you want to apply to the text
  },
});

export default HomeHeader
