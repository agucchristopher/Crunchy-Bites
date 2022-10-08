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
import { restaurants, Toppics, cart } from "../../data";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const Cart = () => {
  const [cartitems, setcart] = useState(cart);
  const [itemnumber, setnumber] = useState(null);
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
            renderItem={({ item }) => {
              if (cartitems !== "") {
                {
                  setnumber(item.number);
                  console.log(item.name + " " + itemnumber);
                }
                return (
                  <View
                    style={{
                      margin: 3,
                      height: 100,
                      elevation: 5,
                      borderRadius: 3,
                      alignItems: "center",
                      flexDirection: "row",
                      paddingLeft: 13,
                      width: Dimensions.get("window").width * 0.98,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={item.source}
                      style={{
                        height: "80%",
                        width: "25%",
                        borderRadius: 3,
                        resizeMode: "contain",
                      }}
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
                          ${item.price * itemnumber}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        alignItems: "flex-end",
                        justifyContent: "space-evenly",
                        flex: 1,
                        marginLeft: 20,
                        borderRadius: 50,
                        width: 200,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setnumber(itemnumber + 1)}
                        style={{
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          flexDirection: "row",
                          marginHorizontal: 10,
                        }}
                      >
                        <Icon name="minus" size={30} color="#F84C0B" />
                      </TouchableOpacity>
                      <Text
                        style={{ fontFamily: "Noto Sans Medium", fontSize: 20 }}
                      >
                        {itemnumber}
                      </Text>
                      <TouchableOpacity
                        onPress={() => setnumber(itemnumber + 1)}
                        style={{
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          flexDirection: "row",
                          marginVertical: 0,
                          marginHorizontal: 10,
                        }}
                      >
                        <Icon name="plus" color="#F84C0B" size={30} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
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

export default Cart;

const styles = StyleSheet.create({});
