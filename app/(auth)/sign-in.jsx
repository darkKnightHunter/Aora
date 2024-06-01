import { Alert, Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";
import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SigIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async () => {
    router.replace("/home");
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }

    setIsSubmitting(true);
    // console.log("yep");

    try {
      const result = await signIn(form.email, form.password);
      if (result) {
        Alert.alert("Success", "Logged in successfully");
        router.replace("/home");
        return;
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full  justify-center px-4  my-6 min-h-[100vh]">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl  text-white font-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title={"Sign In"}
            handlePress={onSubmit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />
          <View className="justify-center flex-row  items-center ">
            <Text className="text-lg mt-4 text-gray-100 font-pregular">
              Don't have anaccount{" "}
            </Text>
            <Link
              href={"/sign-up"}
              className="font-psemibold text-lg text-secondary-100 mt-4"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SigIn;
