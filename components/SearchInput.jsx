import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants/icons";

const SearchInput = ({
  otherStyles,
  title,
  value,
  handleChangeText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-[100%] flex-row  border-2 rounded-2xl border-black-200 focus:border-secondary-100 items-center h-16 px-4 bg-black-100 space-x-4  ">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
