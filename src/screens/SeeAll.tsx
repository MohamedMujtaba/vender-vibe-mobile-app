import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
export const data = [
  {
    id: "1",
    name: "iPhone 13",
    price: 999,
    image: "https://example.com/iphone-13.png",
    color: "Midnight",
  },
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: 799,
    image: "https://example.com/samsung-s21.png",
    color: "Phantom Black",
  },
  {
    id: "3",
    name: "OnePlus 9 Pro",
    price: 969,
    image: "https://example.com/oneplus-9-pro.png",
    color: "Morning Mist",
  },
  {
    id: "4",
    name: "Google Pixel 6",
    price: 799,
    image: "https://example.com/google-pixel-6.png",
    color: "Stormy Black",
  },
  {
    id: "5",
    name: "Xiaomi Mi 11",
    price: 749,
    image: "https://example.com/xiaomi-mi-11.png",
    color: "Midnight Gray",
  },
  {
    id: "6",
    name: "Sony Xperia 1 III",
    price: 1299,
    image: "https://example.com/sony-xperia-1-iii.png",
    color: "Frosted Black",
  },
  {
    id: "7",
    name: "LG Velvet 5G",
    price: 599,
    image: "https://example.com/lg-velvet-5g.png",
    color: "Illusion Sunset",
  },
  {
    id: "8",
    name: "Motorola Moto G Power",
    price: 249,
    image: "https://example.com/motorola-moto-g-power.png",
    color: "Flash Gray",
  },
  {
    id: "9",
    name: "Nokia 8.3 5G",
    price: 699,
    image: "https://example.com/nokia-8-3-5g.png",
    color: "Polar Night",
  },
  {
    id: "10",
    name: "Asus ROG Phone 5",
    price: 999,
    image: "https://example.com/asus-rog-phone-5.png",
    color: "Phantom Black",
  },
  {
    id: "11",
    name: "Realme 8 Pro",
    price: 299,
    image: "https://example.com/realme-8-pro.png",
    color: "Infinite Blue",
  },
  {
    id: "12",
    name: "OPPO Find X3 Pro",
    price: 1199,
    image: "https://example.com/oppo-find-x3-pro.png",
    color: "Gloss Black",
  },
  {
    id: "13",
    name: "ZTE Axon 30 Ultra",
    price: 749,
    image: "https://example.com/zte-axon-30-ultra.png",
    color: "Black",
  },
];

const SeeAll = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-4">
        <Header />
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} classes="mb-4" />}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
const Header = () => {
  const navigation = useNavigation();
  const { title } = useRoute().params;

  return (
    <View className="flex-row items-center justify-between pb-4 pt-2 mb-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-chevron-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Text className="text-base font-semibold">{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("cart")}>
        <View className="bg-blue-400 absolute z-50 w-6 aspect-square -right-2 rounded-full -top-2 items-center justify-center">
          <Text className="text-white text-xs">1</Text>
        </View>
        <Ionicons name="ios-cart-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

interface ItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    color: string;
  };
  classes?: string;
}
const { width, height } = Dimensions.get("window");

const Item: React.FC<ItemProps> = ({ item, classes }) => {
  const dispatch: AppDispatch = useDispatch();

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(addToCart({ ...item, quantity: 1 }));
        navigation.navigate("product");
      }}
      className="mb-3"
    >
      <View
        className="bg-blue-200  aspect-square  rounded-lg"
        style={{
          width: width * 0.43,
        }}
      >
        <View className="w-8 h-8 bg-white/70 absolute top-2 right-3 items-center justify-center rounded-full">
          <Ionicons name="ios-heart-outline" size={20} color="red" />
        </View>
      </View>
      <View className="pt-1">
        <Text
          className="text-base"
          style={{
            width: width * 0.43,
          }}
        >
          {item.name}
        </Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SeeAll;
