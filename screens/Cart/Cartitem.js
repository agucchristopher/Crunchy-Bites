import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Cartitem = (props) => {
  const { item, deleteCart } = props;
  const initnumber = item.number;
  const [itemnumber, setnumber] = useState(initnumber);
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
      <TouchableOpacity
        style={{ top: 0, position: "absolute", zIndex: 1000, right: 0 }}
        onPress={() => deleteCart(item.id)}
      >
        <Icon name="close" color={"#F84C0B"} size={30} />
      </TouchableOpacity>
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
          onPress={() =>
            itemnumber <= 0
              ? console.log("min number")
              : setnumber(itemnumber - 1)
          }
          style={{
            justifyContent: "center",
            alignSelf: "flex-end",
            flexDirection: "row",
            marginHorizontal: 10,
            backgroundColor: itemnumber >= 1 ? "#F84C0B" : "#e8e8e8",
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
            color={itemnumber >= 1 ? "#e8e8e8" : "#F84C0B"}
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
          {itemnumber}
        </Text>
        <TouchableOpacity
          onPress={() =>
            itemnumber >= 15
              ? console.log("max number")
              : setnumber(itemnumber + 1)
          }
          style={{
            justifyContent: "center",
            alignSelf: "flex-end",
            flexDirection: "row",
            marginHorizontal: 10,
            backgroundColor: itemnumber <= 14 ? "#F84C0B" : "#e8e8e8",
            borderRadius: 25,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="plus"
            color={itemnumber <= 14 ? "#e8e8e8" : "#F84C0B"}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cartitem;
