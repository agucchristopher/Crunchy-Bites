import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import mapStyles from "../../assets/mapstyle";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import SimilarRestaurants from "../../components/SimilarRestaurants";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  return (
    <View style={{ height: Dimensions.get("window").height }}>
      <StatusBar backgroundColor="#F84C0B" />
      <TouchableOpacity
        style={{
          top: 10,
          left: 10,
          right: 0,
          bottom: 0,
          position: "absolute",
          zIndex: 30,
          borderRadius: 15,
          backgroundColor: "white",
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>
      <ScrollView
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
          backgroundColor: "#fff",
          padding: 0,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ zIndex: 1000, position: "absolute", top: 0, right: 0 }}>
          <Text style={{ margin: 10 }}>
            <Icon name={"heart"} color={"#F84C0B"} size={30} />
          </Text>
        </View>
        <Image
          source={logo}
          resizeMode={"contain"}
          style={{
            height: Dimensions.get("window").height * 0.35,
            width: Dimensions.get("window").width,
            resizeMode: "cover",
            alignSelf: "center",
            margin: 0,
            padding: 0,
            flex: 2,
            top: 0,
            left: 0,
            right: 0,
            borderBottomRightRadius: 60,
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
              name="map-marker"
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
              name="stopwatch"
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
            latitudeDelta: { lat },
            longitudeDelta: { long },
          }}
          mapType={"terrain"}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          showsBuildings={true}
          showsPointsOfInterest={true}
          zoomControlEnabled
          customMapStyle={mapStyles}
          scrollEnabled={false}
        >
          {/* {<Marker />} */}
        </MapView>
        <SimilarRestaurants id={id} />
      </ScrollView>
    </View>
  );
};

export default RestaurantDetails;
