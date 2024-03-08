// MenuBar.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommonMenuIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
      <Text>☰</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    position: 'absolute',
    top: 40, // Adjust as needed to position the icon vertically
    left: 20, // Adjust as needed to position the icon horizontally
    zIndex: 1, // Ensure the icon is above other components
    
  },
});

export default CommonMenuIcon;
