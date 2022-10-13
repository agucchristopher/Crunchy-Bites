import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { restaurants } from "../../data";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

export const Fooddetails = ({ route, food }) => {
  const { name, id, source, price, favourite, restaurantid, details, number } =
    route.params.food;
  const [amount, setamount] = useState(0);
  const by = restaurants.filter((item) => item.id === restaurantid);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: Dimensions.get("window").height }}>
      <TouchableOpacity
        style={{
          top: 10,
          left: 10,
          right: 0,
          bottom: 0,
          position: "absolute",
          zIndex: 30,
          borderRadius: 15,
          backgroundColor: "white",
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>
      <ScrollView
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
          backgroundColor: "#fff",
          padding: 0,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            zIndex: 1000,
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: favourite ? "#e8e8e8" : "#F84C0B",
            borderRadius: 25,
            margin: 10,
            height: 45,
            width: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ margin: 0 }}>
            <Icon
              name={"heart"}
              color={favourite ? "#F84C0B" : "#e8e8e8"}
              size={25}
            />
          </Text>
        </View>
        <Image
          source={source}
          resizeMode={"contain"}
          style={{
            height: Dimensions.get("window").height * 0.35,
            width: Dimensions.get("window").width * 0.99,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: 0,
            padding: 0,
            flex: 1,
            top: 0,
            left: 0,
            right: 0,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        />
        <View>
          <Text
            style={{
              color: "#F84C0B",
              //   zIndex: 1000,
              //   position: "absolute",
              //   bottom: 0,
              marginLeft: 10,
              marginTop: 10,
              fontFamily: "Noto Sans Medium",
              fontSize: 25,
              backgroundColor: "#fff",
              borderRadius: 25,
              height: 60,
              width: 120,
              backfaceVisibility: "hidden",
              alignItems: "center",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "#F84C0B",
              marginLeft: 5,
              marginTop: 0,
              fontFamily: "Noto Sans Medium",
              fontSize: 15,
              backgroundColor: "#fff",
              borderRadius: 25,
              backfaceVisibility: "hidden",
              alignItems: "center",
            }}
          >
            {details}
          </Text>
          <Text
            style={{
              color: "#F84C0B",
              marginLeft: 5,
              marginTop: 0,
              fontFamily: "Noto Sans Medium",
              fontSize: 20,
              backgroundColor: "#fff",
              backfaceVisibility: "hidden",
              alignItems: "center",
            }}
          >
            By {by.map((item) => item.name)}
          </Text>
          <View
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
              flex: 1,
              borderRadius: 50,
              width: "100%",
              alignSelf: "stretch",
              bottom: 0,
            }}
          >
            <Text
              style={{
                color: "#F84C0B",
                fontSize: 20,
                fontFamily: "Noto Sans Medium",
              }}
            >
              Amount
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                justifyContent: "space-evenly",
                flex: 1,
                marginLeft: 20,
                borderRadius: 50,
                width: 200,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  amount <= 0
                    ? console.log("min number")
                    : setamount(amount - 1)
                }
                style={{
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  marginHorizontal: 10,
                  backgroundColor: amount >= 1 ? "#F84C0B" : "#e8e8e8",
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="minus"
                  size={30}
                  color={amount >= 1 ? "#e8e8e8" : "#F84C0B"}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Noto Sans Medium",
                  fontSize: 20,
                  alignSelf: "center",
                  textAlignVertical: "center",
                  margin: 10,
                }}
              >
                {amount}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  amount >= 15
                    ? console.log("max number")
                    : setamount(amount + 1)
                }
                style={{
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  marginHorizontal: 10,
                  backgroundColor: amount <= 14 ? "#F84C0B" : "#e8e8e8",
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="plus"
                  color={amount <= 14 ? "#e8e8e8" : "#F84C0B"}
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <CustomButton name={"Add to Cart"} color={"#F84C0B"} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
