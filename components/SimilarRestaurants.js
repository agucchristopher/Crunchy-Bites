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
import { restaurants } from "../data";
function SimilarRestaurants() {
  return (
    <View style={{ height: "30%", marginBottom: 60 }}>
      <Text style={[styles.subtitle, { color: "#F84C0B", fontSize: 20 }]}>
        Similar Restaurants
      </Text>
      <FlatList
        data={restaurants}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={(i) => console.log(item.name)}
            style={styles.itemContainer}
          >
            <Image source={item.logo} style={styles.image} />
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
export default SimilarRestaurants;

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
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    width: 200,
    borderRadius: 25,
    backgroundColor: "#fff",
    height: "100%",
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
