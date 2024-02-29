import { StyleSheet, View, Text } from "react-native";

const MarkAttendance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Mark Attendance Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
  },
});

export default MarkAttendance;
