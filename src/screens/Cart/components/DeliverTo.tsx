import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DeliverTo = () => {
  return (
    <View className="flex-row p-4 items-center justify-between">
      <Text>Deliver to </Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-blue-400">Home</Text>
        <View>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#60a5fa" />
        </View>
      </View>
    </View>
  );
};

export default DeliverTo;
