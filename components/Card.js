import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

const Card = ({ _id, name, prompt, photo }) => (
  <View className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <Image
      className="w-full h-auto object-cover rounded-xl"
      source={photo}
    />
    <View className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <Text className="text-white text-sm overflow-y-auto prompt">{prompt}</Text>

      <View className="mt-5 flex justify-between items-center gap-2">
        <View className="flex items-center gap-2">
          <View className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</View>
          <Text className="text-white text-sm">{name}</Text>
        </View>
        <View onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
          <Image source={require("../assets/download.png")} className="w-6 h-6 object-contain invert" />
          
        </View>
      </View>
    </View>
  </View>
);

export default Card;
