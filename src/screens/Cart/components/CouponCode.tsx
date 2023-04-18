import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CouponCode = () => {
  return (
    <View className="w-full pt-2 px-4">
      {/* <Text>Have a coupon code?</Text> */}
      <View className=" w-full mt-2 items-center justify-center ">
        <TextInput
          className="border border-gray-100 w-full p-4 rounded-lg"
          placeholder="Enter Coupon code 🎉"
        />
        <View className="absolute  flex-row items-center justify-center  right-4">
          <Ionicons name="checkmark-circle-sharp" size={24} color="#60a5fa" />
        </View>
      </View>
    </View>
  );
};

export default CouponCode;
