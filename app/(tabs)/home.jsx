import { View, Text, FlatList, StatusBar, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }]}
        key={(item) => item.id}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome back
                </Text>
                <Text className="font-psemibold text-2xl text-white">
                  Hudson
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular">
                Latest Videos
              </Text>
            </View>

            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
          </View>
        )}
      />
      <StatusBar backgroundColor={"#161622"} barStyle={"light-content"} />
    </SafeAreaView>
  );
};

export default Home;
