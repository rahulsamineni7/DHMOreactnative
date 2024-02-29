// LeftNavbar.jsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const LeftNavbar = (props) => {
  const { navigation } = props;

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        ></TouchableOpacity>
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
          Menu
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default LeftNavbar;
