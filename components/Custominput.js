import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const Custominput = (props) => {
  const [view, setview] = React.useState(true);
  return (
    <View
      style={{
        borderColor: "#e8e8e8",
        backgroundColor: "#f9fBFC",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 55,
        borderRadius: 10,
        padding: 10,
        justifyContents: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon
        name={props.left}
        color={"grey"}
        size={25}
        style={{ marginRight: 3 }}
      />
      <TextInput
        style={{
          fontSize: 20,
          flex: 1,
          fontFamily: "Noto Sans Medium",
          alignSelf: "center",
          paddingHorizontal: 15,
        }}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        type={props.type}
        secureTextEntry={props.type == "password" ? view : false}
        keyboardType={props.keyboardType}
        cursorColor="#F84C0B"
      />
      {props.type == "password" ? (
        <Icon
          name={view ? "eye" : "eye-off"}
          color={"grey"}
          size={25}
          style={{ marginRight: 3 }}
          onPress={() => setview(!view)}
        />
      ) : (
        ""
      )}
    </View>
  );
};

export default Custominput;
