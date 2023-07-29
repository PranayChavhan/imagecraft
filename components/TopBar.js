//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Topbar = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex flex-row items-center bg-white">
        <View className="w-full flex-row justify-between items-center border-b border-b-[#e6ebf4] px-4">
          <View>
            <Image source={require("../assets/icon.png")} className="w-14 h-14 object-contain" />
            
          </View>

          <View
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            <Text>Create</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Topbar;
