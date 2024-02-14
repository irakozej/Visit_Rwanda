// screens/TransportationScreen.js
import React from "react";
import { View, Text, Image } from "react-native";

const TransportationScreen = () => {
  return (
    <View>
      <Text>Transportation options in Rwanda:</Text>
      <Image source={require("../assets/bus.jpg")} />
      <Text>Public Bus - Price: $X per ride</Text>
      {/* Add more transportation options information and images */}
    </View>
  );
};

export default TransportationScreen;
