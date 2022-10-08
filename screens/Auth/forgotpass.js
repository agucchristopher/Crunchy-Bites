import { View, Text } from "react-native";
import React from "react";
import Custominput from "../../components/Custominput";
import CustomButton from "../../components/CustomButton";
import Errormodal from "../../components/errormodal";

const Forgotpass = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontFamily: "Noto Sans Medium",
          fontSize: 23,
        }}
      >
        Forgot Your Password?
      </Text>
      <Text
        style={{
          alignSelf: "center",
          fontFamily: "Noto Sans Medium I",
          fontSize: 20,
        }}
      >
        Finish the steps to continue
      </Text>
      <Custominput
        placeholder="Phone Number"
        keyboardType="numeric"
        left="call"
      />
      <Errormodal
        showmodal={false}
        title="Wrong Phonenumber"
        subtitle={"Phone number do not exist"}
      />
      <CustomButton name="Send Code" color={"#F84C0B"} />
    </View>
  );
};

export default Forgotpass;
