import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Header = ({ icon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Search")}
      style={{ margin: 2 }}
    >
      <Icon name={icon} size={35} color={"#F84C0B"} />
    </TouchableOpacity>
  );
};

export default Header;
