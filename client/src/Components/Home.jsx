import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import HomeHeader from "./HomeHeader";

const Home = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuIcon}
      >
        <Text>☰</Text>
      </TouchableOpacity>
      <HomeContent />
    </>
  );
};

const HomeContent = () => {
  return (
    <>
      <HomeHeader />
      <View style={styles.contentContainer}>
      <Text style={styles.headerText}>Employee Details</Text> 
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <Text style={styles.bullet}>👤</Text>
            <Text style={styles.label}>Employee Name:</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.detail}>John Doe</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>🆔</Text>
            <Text style={styles.label}>Employee ID:</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.detail}>12345</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>🏥</Text>
            <Text style={styles.label}>PHC Name:</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.detail}> Clinic</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.bullet}>🏨</Text>
            <Text style={styles.label}>Subcenter Name:</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.detail}>Subcenter</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    padding: 20,
    marginTop: 30,
    width: '50%'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Make the background transparent
  },
  textContainer: {
    width: '80%', // Adjust the width as needed
    borderRadius: 10, // Set border radius for curved corners
    borderWidth: 1, // Add border width for the border
    borderColor: 'black', // Set border color
    padding: 10, // Add padding for content spacing
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 15,
    marginRight: 5, // Add space between bullet point and text
  },
  label: {
    fontSize: 13,
    marginRight: 5,
  },
  detailContainer: {
    flex: 1, // Take up remaining space in the row
    alignItems: '', // Align text to the end (right)
  },
  detail: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center', // Align text to the center
  },
});

export default Home;
