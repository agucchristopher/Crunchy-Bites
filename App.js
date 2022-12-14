import * as React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/header";
import Home from "./screens/Home";
import { Cart, cartlength } from "./screens/Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import Signin from "./screens/Auth/signin";
import { createNativeStackNavigator } from "./node_modules/react-native-screens/lib/commonjs/native-stack";
import Search from "./screens/Search";
import Signup from "./screens/Auth/signup";
import Forgotpass from "./screens/Auth/forgotpass";
import { Fooddetails } from "./screens/Details";
import Notifications from "./screens/Notifications";
import RestaurantDetails from "./screens/Details/restuarantDetails";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App({ Navigator }) {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={"#F84C0B"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerTintColor: "#F84C0B",
            title: "Sign In",
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTintColor: "#F84C0B",
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            title: "Sign Up",
          }}
        />
        <Stack.Screen
          name="Fp"
          component={Forgotpass}
          options={{
            headerTintColor: "#F84C0B",
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            title: "Forget Password?",
            headerBackButtonShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTintColor: "#F84C0B",
            tabBarShowLabel: false,
            //tabBarHideOnKeyboard: true,
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            // tabBarIcon: (tabInfo) => {
            //   return (
            //     <Ionicons
            //       name="md-search"
            //       size={tabInfo.focused ? 35 : 30}
            //       color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
            //     />
            //   );
            // },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rdetails"
          component={RestaurantDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={Fooddetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Tabs() {
  return (
    <React.Fragment>
      <Tab.Navigator options={{ headerTintColor: "#F84C0B" }}>
        <Tab.Screen
          name="Homepage"
          component={Home}
          options={{
            headerTintColor: "#F84C0B",
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            title: "Crunchy Bites",
            headerBackButtonShown: false,
            tabBarShowLabel: false,
            headerRight: () => <Header icon={"search"} />,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-home"
                  size={tabInfo.focused ? 35 : 30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTintColor: "#F84C0B",
            tabBarShowLabel: false,
            tabBarBadge: 10,
            tabBarBadgeStyle: {
              backgroundColor: "#F84C0B",
              fontFamily: "Noto Sans Medium",
            },
            tabBarHideOnKeyboard: true,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-cart"
                  size={tabInfo.focused ? 35 : 30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Favourite"
          component={Home}
          options={{
            headerTintColor: "#F84C0B",
            tabBarShowLabel: false,
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  style={{}}
                  name="heart"
                  size={tabInfo.focused ? 35 : 30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerTintColor: "#F84C0B",
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            tabBarBadge: "5",
            tabBarBadgeStyle: {
              backgroundColor: "#F84C0B",
              fontFamily: "Noto Sans Medium",
            },
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-notifications"
                  size={tabInfo.focused ? 35 : 30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            headerTintColor: "#F84C0B",
            headerTitleStyle: {
              fontFamily: "Noto Sans Medium",
            },
            tabBarShowLabel: false,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-settings"
                  size={tabInfo.focused ? 35 : 30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}
