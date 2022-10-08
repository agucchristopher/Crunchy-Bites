import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import mapStyles from "../../assets/mapstyle";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import SimilarRestaurants from "../../components/SimilarRestaurants";
const RestaurantDetails = ({ restaurant, route }) => {
  console.log(route);
  const {
    name,
    logo,
    phone,
    maplocation,
    rating,
    location,
    id,
    duration,
    time,
    menu,
  } = route.params.restaurant;
  const long = maplocation.longitude;
  const lat = maplocation.latitude;
  return (
    <View style={{ height: "100%" }}>
      <StatusBar backgroundColor="#F84C0B" />
      <ScrollView
        style={{
          paddingTop: StatusBar.currentHeight,
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={logo}
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").width * 1,
            resizeMode: "contain",
            alignSelf: "flex-start",
            marginTop: 0,
            padding: 0,
            flex: 1,
          }}
        />
        <Text
          style={{
            fontFamily: "Noto Sans Medium",
            alignSelf: "center",
            fontSize: 30,
            color: "#F84C0B",
          }}
        >
          {name}
        </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              fontFamily: "Noto Sans Medium",
              justifyContent: "center",
            }}
          >
            <Icon
              name="star"
              style={{
                margin: 0,
                color: "#F84C0B",
                fontFamily: "Noto Sans Medium",
              }}
              size={25}
            />
            <Text
              style={{
                margin: 0,
                color: "#F84C0B",
                fontSize: 20,
                fontFamily: "Noto Sans Medium",
              }}
            >
              {" "}
              {rating}
              {"   "}
            </Text>
            <Icon
              name="map-marker-alt"
              style={{ margin: 0, color: "#F84C0B" }}
              size={25}
            />
            <Text
              style={{
                margin: 0,
                fontSize: 20,
                color: "#F84C0B",
                fontFamily: "Noto Sans Medium",
              }}
            >
              {" "}
              {location}
              {"  "}
            </Text>
            <Icon
              name="clock"
              style={{ margin: 0, color: "#F84C0B" }}
              size={25}
            />
            <Text
              style={{
                margin: 0,
                fontSize: 20,
                color: "#F84C0B",
                fontFamily: "Noto Sans Medium",
              }}
            >
              {" "}
              {time}{" "}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Noto Sans Medium",
            fontSize: 20,
            color: "#F84C0B",
            alignSelf: "center",
          }}
        >
          Location on the map <Icon name="map" size={20} />
        </Text>
        <MapView
          style={{
            flex: 1,
            height: 200,
            width: "100%",
          }}
          zoomControlledEnabled
          showUserLocation={true}
          region={{
            longitude: { long },
            latitude: { lat },
            latitudeDelta: 1,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyles}
        >
          {/* {<Marker />} */}
        </MapView>
        <SimilarRestaurants />
        <View>
          <Text>{"      "}</Text>
          <Text>{"      "}</Text>
          <Text>{"      "}</Text>
          <Text>{"      "}</Text>
          <Text>{"      "}</Text>
          <Text>{"      "}</Text>
          <Text>{"      "}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantDetails;
