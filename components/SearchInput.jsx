import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants/icons";
import { router, usePathname } from "expo-router";

const SearchInput = ({
  otherStyles,
  title,
  value,
  handleChangeText,
  initialQuery,
  ...props
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="w-[100%] flex-row  border-2 rounded-2xl border-black-200 focus:border-secondary-100 items-center h-16 px-4 bg-black-100 space-x-4  ">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor={"#CDCDE0"}
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query)
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database "
            );
          if (pathname.startsWith("/search")) {
            return router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
