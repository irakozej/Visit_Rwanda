// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Rwanda!</Text>
      <Button title="Parks" onPress={() => navigation.navigate("Parks")} />
      <Button title="Hotels" onPress={() => navigation.navigate("Hotels")} />
      <Button
        title="Transportation"
        onPress={() => navigation.navigate("Transportation")}
      />
    </View>
  );
};

export default HomeScreen;
