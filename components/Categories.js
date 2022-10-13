import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { Foods, category } from "../data";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  const [selectedcategory, setselectedcategory] = useState("Snacks");
  const [categories, setcategories] = useState(category);
  return (
    <View showHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
      <Text style={styles.text}>Categories </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              margin: 10,
              backgroundColor:
                item.name == selectedcategory ? "#F84C0B" : "white",
              borderRadius: 5,
              width: 100,
              alignItems: "center",
              height: 30,
              justifyContent: "center",
            }}
            onPress={() => setselectedcategory(item.name)}
          >
            <Text
              style={{
                color: item.name == selectedcategory ? "white" : "#F84C0B",
                fontFamily: "Noto Sans Medium",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        scrollEventThrottle={16}
        // pagingEnabled
        // snapToAlignment="center"
        data={Foods.filter((item) => item.category.includes(selectedcategory))}
        horizontal={true}
        showHorizontalScrollIndicator={false}
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
                  paddingBottom: 10,
                },
              ]}
            >
              {item.name} ${item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

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
    // borderRadius: 30,
  },
  logo: {
    width: Dimensions.get("window").width * 0.8,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    resizeMode: "contain",
    borderRadius: 150,
  },
  itemContainer: {
    padding: 0,
    margin: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    width: 180,
    borderRadius: 25,
    backgroundColor: "#fff",
    flex: 1,
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
    margin: 5,
    // alignSelf: "center",
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
