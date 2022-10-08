import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { restaurants } from "../data";
import { useNavigation } from "@react-navigation/native";
const PopularRestaurants = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <Text style={styles.text}>Popular Restuarants</Text>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Rdetails", { restaurant: item })
            }
            style={styles.restaurant}
          >
            <Text style={styles.text}>{item.name}</Text>
            <Image source={item.logo} style={styles.logo} />
            <Text
              style={[
                styles.subtitle,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                },
              ]}
            >
              {" "}
              <Icon name="star" size={15} color="#F84C0B" /> {item.rating}{" "}
              {"  "}
              <Icon name="phone-alt" size={15} color="#F84C0B" /> {item.phone}
              {"  "}
              <Icon name="map-marker-alt" size={15} color="#F84C0B" />{" "}
              {item.location}
            </Text>
          </TouchableOpacity>
        )}
      />
    </React.Fragment>
  );
};

export default PopularRestaurants;

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
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    width: 200,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    zIndex: 0,
  },
  text: {
    fontFamily: "Noto Sans Medium",
    fontSize: 25,
    margin: 10,
    marginTop: 0,
  },
  restaurant: {
    marginTop: 10,
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
