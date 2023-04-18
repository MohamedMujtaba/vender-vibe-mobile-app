import { useEffect, useRef } from "react";
import { Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";

const Party = ({ show, setShow }) => {
  const animation = useRef<any>(null);
  useEffect(() => {
    if (animation.current) {
      setTimeout(() => {
        animation.current?.reset();
        animation.current?.play();
      }, 100);
    }
    const t = setTimeout(() => {
      setShow(false);
    }, 7000);
  }, []);

  const { width, height } = Dimensions.get("window");
  return (
    <View
      className="flex-1  items-center justify-center absolute z-50"
      style={{ width, height }}
    >
      <LottieView
        ref={animation}
        style={{
          height: height,
        }}
        autoPlay
        speed={0.5}
        loop={false}
        source={require("../../../../assets/97078-ballooncelebration.json")}
      />
    </View>
  );
};

export default Party;
