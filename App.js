import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "./screens/Home";
import Cart from "./screens/Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import Header from "./components/header";
const Tab = createBottomTabNavigator();

export default function App({ Navigator }) {
  return (
    <NavigationContainer>
      <Tab.Navigator options={{ headerTintColor: "#F84C0B" }}>
        <Tab.Screen
          name="Home"
          component={home}
          options={{
            tabBarShowLabel: false,
            headerTintColor: "#F84C0B",
            headerRight: () => <Header />,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-home"
                  size={30}
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
          component={home}
          options={{
            headerTintColor: "#F84C0B",
            tabBarShowLabel: false,

            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="heart"
                  size={30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={home}
          options={{
            headerTintColor: "#F84C0B",
            tabBarShowLabel: false,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-search"
                  size={tabInfo.focused ? 35 : 30}
                  color={tabInfo.focused ? "#F84C0B" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={home}
          options={{
            headerTintColor: "#F84C0B",
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
    </NavigationContainer>
  );
}
