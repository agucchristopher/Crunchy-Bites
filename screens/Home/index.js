import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  LogBox,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Toppics, cart, restaurants } from "../../data";

const renderscroll = () => {
  return (
    <ScrollView
      style={styles.scrollcontainer}
      horizontal={"true"}
      showsHorizontalScrollIndicator={"false"}
    >
      <FlatList
        data={Toppics}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={(i) => console.log(item.price)}
            style={styles.itemContainer}
          >
            <Image source={item.source} style={styles.image} />
            <Text
              style={[
                styles.subtitle,
                {
                  alignContent: "center",
                  justifyContent: "center",
                  paddingBottom: 20,
                },
              ]}
            >
              {item.name} ${item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const renderRestuarants = (navigation) => {
  console.log(navigation)
  return (
    <ScrollView>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("details")}
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
              <Icon name="map-marker" size={15} color="#F84C0B" />{" "}
              {item.location}
            </Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};
const Home = () => {
  const [fontsLoaded] = useFonts({
    "Noto Sans Medium I": require("../../assets/fonts/Noto_Sans/NotoSans-Medium.ttf"),
    "Noto Sans Medium": require("../../assets/fonts/Noto_Sans/NotoSans-Bold.ttf"),
    Roboto: require("../../assets/fonts/roboto/Roboto-Black.ttf"),
  });
  useEffect(() => {
   LogBox.ignoreAllLogs();
  });
  if (!fontsLoaded) {
    return <ActivityIndicator animating color={"#F84C0B"} size={"large"} />;
  } else {
    return (
      <View>
        <ScrollView style={styles.container}>
          <View
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          >
            <View
              style={{
                height: "50%",
                position: "absolute",
                opacity: 1,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#fff",
                height: "50%",
                position: "absolute",
              }}
            ></View>
          </View>
          <View>
            <Text style={styles.text}>Top Picks Today </Text>
            <View
              onPress={() => {
                Alert.alert("Hey", "hey");
              }}
            >
              {renderscroll()}
            </View>
            <Text style={styles.text}>Popular Restuarants</Text>
            <View>{renderRestuarants()}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

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
export default Home;
