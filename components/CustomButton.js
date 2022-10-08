import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ name, color, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: "center",
        height: 55,
        backgroundColor: color,
        alignItems: "center",
        margin: 15,
        justifyContent: "center",
        width: "80%",
        borderRadius: 15,
      }}
      onPress={color == "#e8e8e8" ? "" : onPress}
    >
      <Text
        style={{ color: "white", fontSize: 20, fontFamily: "Noto Sans Medium" }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
