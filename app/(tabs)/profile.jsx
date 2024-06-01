import { View, Text, FlatList, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { getLatestPosts, searchPost } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPost(query));
  const { data: latest } = useAppwrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    refetch();
  }, [query]);
  return (
    <SafeAreaView className="bg-primary  h-full">
      <FlatList
        data={posts}
        key={(item) => item.id}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Search results
                </Text>
                <Text className="font-psemibold text-2xl text-white">
                  {query}
                </Text>
              </View>
            </View>
            <SearchInput initialQuery={query} />
          </View>
        )}
        ListEmptyComponent={() => {
          return (
            <EmptyState
              title="No videos found"
              subtitle="Be the first one to upload a video"
            />
          );
        }}
      />
      <StatusBar backgroundColor={"#161622"} barStyle={"light-content"} />
    </SafeAreaView>
  );
};

export default Profile;
