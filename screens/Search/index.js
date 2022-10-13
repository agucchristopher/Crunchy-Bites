import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { restaurants, Foods } from "../../data";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const Search = () => {
  const [input, setinput] = React.useState("");
  const [restaurant, setRestaurant] = React.useState(null);
  function Oninput(value) {
    setinput(value);
  }
  const navigation = useNavigation();
  const search = restaurants.filter((item) => item.name.includes(input));
  console.log(search);
  return (
    <KeyboardAvoidingView style={{ backgroundColor: "#fff", flex: 1 }}>
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
          borderColor: "#fff",
          elevation: 15,
          borderRadius: 25,
        }}
      >
        <Text style={{ marginLeft: 8 }}>
          <Icon name="search" size={25} color="grey" />
        </Text>
        <TextInput
          autoFocus
          placeholder="Search..."
          placeholderTextColor="grey"
          style={styles.input}
          onFocus={() => setRestaurant(restaurants)}
          onChangeText={(input) => {
            Oninput(input);

            setRestaurant(search);
          }}
          onBlur={() => setRestaurant(search)}
        />
      </View>
      <View>
        <FlatList
          data={restaurant}
          renderItem={({ item }) => {
            if (search.length >= 1) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Rdetails", { restaurant: item })
                  }
                  style={{
                    margin: 3,
                    height: 100,
                    elevation: 6,
                    borderRadius: 5,
                    alignItems: "center",
                    flexDirection: "row",
                    paddingLeft: 13,
                    width: Dimensions.get("window").width * 0.98,
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    source={item.logo}
                    style={{
                      height: "80%",
                      width: "25%",
                      borderRadius: 3,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <View
                      onPress={() => console.log(item)}
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
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
        {search.length <= 0 ? (
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontFamily: "Noto Sans Medium", fontSize: 25 }}>
              Found Nothing <Icon name="search" size={25} />
            </Text>
          </View>
        ) : (
          ""
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "white",
    height: 30,
    color: "black",
    paddingLeft: 20,
    margin: 5,
    borderRadius: 20,
    fontSize: 20,
  },
});
