import {
  View,
  Text,
  ActivityIndicator,
  LogBox,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Custominput from "../../components/Custominput";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CustomButton from "../../components/CustomButton";

const Signin = () => {
  const [phone, setphone] = React.useState("");
  const [pass, setpass] = React.useState("");
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Noto Sans Medium I": require("../../assets/fonts/Noto_Sans/NotoSans-Medium.ttf"),
    "Noto Sans Medium": require("../../assets/fonts/Noto_Sans/NotoSans-Bold.ttf"),
    Roboto: require("../../assets/fonts/roboto/Roboto-Black.ttf"),
  });
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  });
  if (!fontsLoaded) {
    return <ActivityIndicator animating color={"#F84C0B"} size={"large"} />;
  } else {
    return (
      <KeyboardAvoidingView
        behaviour="padding"
        style={{
          backgroundColor: "#fff",
          height: Dimensions.get("window").height,
          zIndex: 0,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Noto Sans Medium",
            fontSize: 25,
          }}
        >
          Welcome Back Friend
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Noto Sans Medium I",
            fontSize: 20,
          }}
        >
          Let us sign you in
        </Text>
        <Custominput
          left={"call"}
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={(val) => setphone(val)}
          value={phone}
        />
        <Custominput
          type="password"
          placeholder="Password"
          secureTextEntry
          left="lock-closed"
          onChangeText={(val) => setpass(val)}
        />
        <Text
          style={{
            fontFamily: "Noto Sans Medium",
            color: "#F84C0B",
            alignSelf: "flex-end",
            marginRight: 2,
          }}
          onPress={() => navigation.navigate("Fp")}
        >
          Forgot Password?
        </Text>
        <CustomButton
          onPress={() => {
            console.log(pass);
            navigation.navigate("Home");
          }}
          name="Sign In"
          color={
            phone == ""
              ? "#e8e8e8"
              : "#F84C0B" && pass == ""
              ? "#e8e8e8"
              : "#F84C0B"
          }
        />
        <Text style={{ alignSelf: "center", fontFamily: "Noto Sans Medium I" }}>
          New to Crunchy Bites?{" "}
          <Text
            style={{ fontFamily: "Noto Sans Medium", color: "#F84C0B" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Signup
          </Text>
        </Text>
      </KeyboardAvoidingView>
    );
  }
};

export default Signin;
