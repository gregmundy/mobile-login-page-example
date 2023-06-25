import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../themes";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function WelcomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex flex-1 justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Let's Get Started
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/welcome.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-semibold text-yellow-400 ml-1">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
