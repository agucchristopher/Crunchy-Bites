import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  LogBox,
  Image,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { restaurants, Foods, cart } from "../../data";
import { useFonts } from "expo-font";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import Cartitem from "./Cartitem";

export const Cart = () => {
  const [cartitems, setcart] = useState(cart);
  console.log(cartitems);
  const Cartlength = cartitems.length;
  const [fontsLoaded] = useFonts({
    "Noto Sans Medium I": require("../../assets/fonts/Noto_Sans/NotoSans-Medium.ttf"),
    "Noto Sans Medium": require("../../assets/fonts/Noto_Sans/NotoSans-Bold.ttf"),
    Roboto: require("../../assets/fonts/roboto/Roboto-Black.ttf"),
  });
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  });
  const deleteCart = (id) => {
    setcart((prevState) => {
      return prevState.filter((item) => item.id != id);
    });
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      {cartitems.length > 0 ? (
        <React.Fragment>
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontFamily: "Noto Sans Medium",
                fontSize: 25,
              }}
            >
              Your Cart
            </Text>
          </View>
          <FlatList
            data={cartitems}
            showVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            hiddenItem={() => <Text>hh</Text>}
            it
            renderItem={({ item }) => {
              if (cartitems !== "") {
                return <Cartitem item={item} deleteCart={deleteCart} />;
              }
            }}
          />
        </React.Fragment>
      ) : (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text
            style={{
              fontFamily: "Noto Sans Medium I",
              fontSize: 25,
              alignSelf: "center",
            }}
          >
            No items in your cart!
          </Text>
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
