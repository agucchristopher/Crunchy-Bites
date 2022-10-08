import { View, Text, Modal } from "react-native";
import React from "react";

const Errormodal = ({ showmodal, title, subtitle }) => {
  return (
    <Modal
      animationType="slide"
      visible={showmodal}
      transparent={true}
      style={{
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        height: "60%",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "Noto Sans Medium" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 15, fontFamily: "Noto Sans Medium" }}>
          {subtitle}
        </Text>
      </View>
    </Modal>
  );
};

export default Errormodal;
