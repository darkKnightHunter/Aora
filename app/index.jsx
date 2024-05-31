import { StatusBar, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-pblack">RootLayout</Text>
      <StatusBar style="auto" />
      <Link href={"/home"} style={{ color: "blue" }}>
        GO to Home
      </Link>
    </View>
  );
};

export default App;
