import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  LogBox,
} from "react-native";
import React from "react";
import Custominput from "../../components/Custominput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Signup = () => {
  const navigation = useNavigation();
  const [username, setusername] = React.useState(null);
  const [phone, setphone] = React.useState(null);
  const [password, setpassword] = React.useState(null);
  const [passwordtwo, setpasswordtwo] = React.useState(null);
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
      <View
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
          Welcome Friend
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Noto Sans Medium I",
            fontSize: 20,
          }}
        >
          Let's Create An Account
        </Text>
        <Custominput
          left="person"
          placeholder="Username"
          onChangeText={(e) => setusername(e)}
        />
        <Custominput
          left="call"
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={(e) => setphone(e)}
        />
        <Custominput
          left="lock-closed"
          placeholder="Password"
          secureTextEntry
          type="password"
          onChangeText={(e) => setpassword(e)}
        />
        <Custominput
          left="lock-closed"
          placeholder="Retype Password"
          secureTextEntry
          type="password"
          onChangeText={(e) => setpasswordtwo(e)}
        />
        <CustomButton
          name={"Signup"}
          onPress={() =>
            console.log(
              username + " " + " " + phone + " " + password + " " + passwordtwo
            )
          }
          color={
            username == ""
              ? "grey"
              : "#F84C0B" && password == ""
              ? "grey"
              : "#F84C0B" && passwordtwo == ""
              ? "grey"
              : "#F84C0B"
          }
        />
        <Text style={{ alignSelf: "center", fontFamily: "Noto Sans Medium I" }}>
          Already A User?{" "}
          <Text
            style={{ fontFamily: "Noto Sans Medium", color: "#F84C0B" }}
            onPress={() => navigation.navigate("Signin")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    );
  }
};
export default Signup;
