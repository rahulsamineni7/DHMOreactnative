// PatientEntry.js

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CommonMenuIcon from './MenuBar';

const PatientEntry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CommonMenuIcon onPress={() => navigation.toggleDrawer()} />
      <Text style={styles.text}>This is the Patient Entry Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default PatientEntry;
