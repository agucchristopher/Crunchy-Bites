import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  LogBox,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { restaurants, Toppics, cart } from "../../data";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";

const Cart = () => {
  const [cartitems, setcart] = useState(cart);
  const [fontsLoaded] = useFonts({
    "Noto Sans Medium I": require("../../assets/fonts/Noto_Sans/NotoSans-Medium.ttf"),
    "Noto Sans Medium": require("../../assets/fonts/Noto_Sans/NotoSans-Bold.ttf"),
    Roboto: require("../../assets/fonts/roboto/Roboto-Black.ttf"),
  });
  console.log(cartitems);
  React.useEffect(() => {
    LogBox.ignoreAllLogs(
      "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead."
    );
  });
  const deleteCart = (id) => {
    setcart((prevState) => {
      return prevState.filter((item) => item.id != id);
    });
    console.log(cartitems.length.toFixed);
  };
  if (!fontsLoaded) {
    return <ActivityIndicator animating color={"#F84C0B"} size={"large"} />;
  } else {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <FlatList
          data={cartitems}
          renderItem={({ item }) => {
            if (cartitems !== 0) {
              return (
                <View
                  style={{
                    margin: 10,
                    height: 70,
                    elevation: 5,
                    borderRadius: 3,
                    alignItems: "center",
                    flexDirection: "row",
                    paddingLeft: 13,
                    width: "100%",
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    source={item.source}
                    style={{ height: 50, width: 50, borderRadius: 3 }}
                  />
                  <View>
                    <View
                      style={{
                        flexDirection: "column",
                        height: "100%",
                        marginLeft: 8,
                        justifyContent: "center",
                        backgroundColor: "white",
                      }}
                    >
                      <Text
                        style={{
                          color: "black",
                          fontFamily: "Noto Sans Medium",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 20,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: "black",
                          fontFamily: "Noto Sans Medium",
                          alignItems: "center",
                          fontSize: 20,
                          justifyContent: "center",
                          margin: 0,
                        }}
                      >
                        ${item.price}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => deleteCart(item.id)}
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      width: "80%",
                      flexDirection: "row",
                      marginVertical: 0,
                      backgroundColor: "white",
                    }}
                  >
                    <Icon name="times" size={25} />
                  </TouchableOpacity>
                </View>
              );
            } else {
              return <Text>No Item in your cart!</Text>;
            }
          }}
        />
      </View>
    );
  }
};

export default Cart;

const styles = StyleSheet.create({});
