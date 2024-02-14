// screens/HotelsScreen.js
import React from "react";
import { View, Text, Image } from "react-native";

const HotelsScreen = () => {
  return (
    <View>
      <Text>Hotels to stay in Rwanda:</Text>
      <Image source={require("../assets/hotel1.jpg")} />
      <Text>Hotel A - Price: $X per night</Text>
      {/* Add more hotels information and images */}
    </View>
  );
};

export default HotelsScreen;
