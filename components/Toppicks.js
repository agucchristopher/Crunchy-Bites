import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Toppics } from "../data";

export default function Toppicks() {
  return (
    <View showHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
      <Text style={styles.text}>Top Picks Today </Text>
      <FlatList
        data={Toppics}
        horizontal={true}
        showHorizontalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={(i) => console.log(item.name + " " + item.price)}
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
    width: Dimensions.get("window").width * 0.4,
    marginLeft: 0,
    marginRight: 5,
    marginBottom: 4,
    padding: 0,
    height: 200,
    resizeMode: "contain",
    flex: 1,
    marginTop: 0,
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
