import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import * as Location from 'expo-location';

const Login = () => {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  const handleLogin = () => {
    // Check if location is within a certain range of Gachibowli
    const gachibowliLatitude = 17.4401;
    const gachibowliLongitude = 78.3489;
    const tolerance = 0.1; // Adjust this tolerance value as needed

    if (
      location &&
      Math.abs(location.coords.latitude - gachibowliLatitude) > tolerance &&
      Math.abs(location.coords.longitude - gachibowliLongitude) > tolerance
    ) {
      Alert.alert(
        "Location Not in Gachibowli",
        "Your current location is not within Gachibowli.",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
      return;
    }
    // If location is in Gachibowli or within the tolerance range, navigate to HomeDrawer
    navigation.navigate("HomeDrawer");
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.formText}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="User ID"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            
            <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
  },
  form: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formText: {
    fontSize: 18,
    marginBottom: 25,
    color: "#555",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 25,
    paddingLeft: 10,
    width: "80%",
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
