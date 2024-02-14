// screens/ParksScreen.js
import React from "react";
import { View, Text, Image } from "react-native";

const ParksScreen = () => {
  return (
    <View>
      <Text>Parks to visit in Rwanda:</Text>
      <Image source={require("../assets/volcanoes.jpg")} />
      <Text>Volcanoes National Park - Price: $X</Text>
      {/* Add more parks information and images */}
    </View>
  );
};

export default ParksScreen;
