// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ParksScreen from "./screens/ParksScreen";
import HotelsScreen from "./screens/HotelsScreen";
import TransportationScreen from "./screens/TransportationScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Parks" component={ParksScreen} />
        <Stack.Screen name="Hotels" component={HotelsScreen} />
        <Stack.Screen name="Transportation" component={TransportationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
