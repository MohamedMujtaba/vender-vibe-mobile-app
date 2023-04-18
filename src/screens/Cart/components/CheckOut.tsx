import { Text, TouchableOpacity, View } from "react-native";
import Dash from "react-native-dash";

const CheckOut = ({ setShow }) => {
  return (
    <View className="p-4">
      <View className="w-full flex-row items-center justify-between mb-2 ">
        <Text className="text-base font-semibold text-gray-400 ">
          Subtotal :
        </Text>
        <Text className="text-base font-bold">150,000</Text>
      </View>
      <View className="w-full flex-row items-center justify-between mb-2">
        <Text className="text-base font-semibold text-gray-400">
          Delivery Fee :
        </Text>
        <Text className="text-base font-bold">2,000</Text>
      </View>
      <View className="w-full flex-row items-center justify-between mb-2">
        <Text className="text-base font-semibold text-gray-400">
          Discount :
        </Text>
        <Text className="text-base font-bold text-red-300">5,000</Text>
      </View>
      <Dash
        ///@ts-ignore
        className="w-full py-2"
        dashColor="#9ca3af"
        style={{ height: 1 }}
        dashGap={4}
        dashLength={4}
        dashThickness={1}
      />
      <View className="w-full flex-row items-center justify-between mt-2">
        <Text className="text-base font-semibold text-gray-400">Total :</Text>
        <Text className="text-lg font-bold text-blue-400 ">150,000</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
        }}
        className="w-full rounded-lg mt-4 bg-blue-400 p-4 items-center"
      >
        <Text className="text-white text-base font-bold ">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOut;
