import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants/icons";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({ video: { title, document, video, thumbnail } }) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col mb-14 items-center px-4">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-1 flex-row">
          <View className="w-[46px] h-[46px] border border-secondary justify-center  rounded-lg">
            <Image
              //   source={{ uri: video.creator?.avatar || "" }}
              source={{ uri: thumbnail }}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}{" "}
            </Text>
            <Text className="text-xs text-gray-100 font-pregular">Unknown</Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60  rounded-xl mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
