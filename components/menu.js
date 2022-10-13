import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { Component } from "react";
import { restaurants, Foods } from "../data";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
function Menu({ id }) {
  const navigation = useNavigation();
  const Similar = Foods.filter((item) => item.restaurantid == id);
  console.log("similar ", Similar);
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={[
          styles.subtitle,
          { color: "#F84C0B", fontSize: 25, alignSelf: "center" },
        ]}
      >
        Menu <Icon name="spoon" size={20} />
      </Text>
      <FlatList
        data={Similar}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FoodDetails", { food: item })}
            style={styles.itemContainer}
          >
            <Image source={item.source} style={styles.image} />
            <Text
              style={[
                styles.subtitle,
                {
                  alignContent: "center",
                  justifyContent: "center",
                  marginBottom: 30,
                },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
export default Menu;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width * 0.5,
    marginLeft: 0,
    marginRight: 5,
    marginBottom: 4,
    padding: 0,
    height: 200,
    resizeMode: "contain",
    flex: 1,
    marginTop: 5,
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
  itemContainer: {
    padding: 0,
    margin: 10,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    width: 200,
    borderRadius: 25,
    backgroundColor: "#fff",
    flex: 1,
    height: 250,
    maxHeight: 300,
  },
  container: {
    backgroundColor: "#fff",
    opacity: 1,
    height: "100%",
    elevation: 2,
    borderRadius: 2,
    zIndex: 0,
  },
  text: {
    fontFamily: "Noto Sans Medium",
    fontSize: 25,
    margin: 10,
    alignSelf: "center",
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
});
