import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  LogBox,
  ActivityIndicator,
  TextInput,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Toppics, cart, restaurants } from "../../data";
import Toppicks from "../../components/Toppicks";
import PopularRestaurants from "../../components/PopularRestaurants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Noto Sans Medium I": require("../../assets/fonts/Noto_Sans/NotoSans-Medium.ttf"),
    "Noto Sans Medium": require("../../assets/fonts/Noto_Sans/NotoSans-Bold.ttf"),
    Roboto: require("../../assets/fonts/roboto/Roboto-Black.ttf"),
  });
  useEffect(() => {
    LogBox.ignoreAllLogs();
  });
  if (!fontsLoaded) {
    return <ActivityIndicator animating color={"#F84C0B"} size={"large"} />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
          backgroundColor: "#fff",
        }}
      >
        <StatusBar backgroundColor="#F84C0B" style="light" />
        <ScrollView
          showHorizontalScrollIndicator={false}
          showVerticalScrollIndicator={false}
          style={styles.container}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContents: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              borderRadius: 0,
              backgroundColor: "#fff",
              margin: 5,
              borderWidth: 2,
              borderColor: "darkgrey",
              elevation: 5,
              borderRadius: 25,
              position: "relative",
              // borderColor: "#fff",
            }}
          >
            <Text
              style={{
                color: "darkgrey",
                height: 35,
                width: "90%",
                fontSize: 20,
                paddingLeft: 20,
              }}
              onPress={() => {
                navigation.navigate("Search");
                console.log("search");
              }}
            >
              Search Foods..
            </Text>
            <Text>
              <Icon
                style={{ alignSelf: "flex-end" }}
                name="search"
                size={20}
                color="darkgrey"
              />
            </Text>
          </View>
          <Toppicks />
          <PopularRestaurants />
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width * 0.4,
    marginLeft: 0,
    marginRight: 5,
    marginBottom: 4,
    padding: 0,
    height: 200,
    resizeMode: "contain",
    flex: 1,
    marginTop: 0,
    borderRadius: 0,
  },
  logo: {
    width: Dimensions.get("window").width * 0.8,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    zIndex: 0,
  },
  text: {
    fontFamily: "Noto Sans Medium",
    fontSize: 25,
    margin: 10,
    marginTop: 0,
  },
  restaurant: {
    marginTop: 8,
    elevation: 10,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 20,
  },
  subtitle: {
    fontFamily: "Noto Sans Medium",
    fontSize: 15,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    height: 30,
    color: "black",
    paddingLeft: 20,
    margin: 5,
    borderRadius: 25,
    fontSize: 20,
  },
});
export default Home;
