// App.jsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Auth/Login";
import Home from "./src/Components/Home";
import LeftNavbar from "./src/Components/LeftNavbar";
import MarkAttendance from "./src/Components/MarkAttendance";
import PatientEntry from "./src/Components/PatientEntry";
import PatientLogs from "./src/Components/PatientLogs";
import ViewAttendance from "./src/Components/ViewAttendance";
import Logout from "./src/Auth/Logout";
import HomeHeader from "./src/Components/HomeHeader";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {



  
  return (
    <Drawer.Navigator drawerContent={(props) => <LeftNavbar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Patient Entry"
        component={PatientEntry}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Patient Logs"
        component={PatientLogs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Mark Attendance"
        component={MarkAttendance}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="View Attendance"
        component={ViewAttendance}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;