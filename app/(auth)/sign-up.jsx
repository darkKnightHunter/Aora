import { Alert, Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";
import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }

    setIsSubmitting(true);
    console.log("yep");

    try {
      const result = await createUser(form.email, form.password, form.username);
      if (result) {
        Alert.alert("Success", "Account created successfully");
        // Assuming router.push works correctly when the condition is met
        router.replace("/home");
        return; // Return to prevent the execution of setIsSubmitting(false)
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
            Sign Up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
            // keyboardType="email-address"
          />
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
            title={"Sign Up"}
            handlePress={onSubmit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />
          <View className="justify-center flex-row  items-center ">
            <Text className="text-lg mt-4 text-gray-100 font-pregular">
              Have an account already{" "}
            </Text>
            <Link
              href={"/sign-in"}
              className="font-psemibold text-lg text-secondary-100 mt-4"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
