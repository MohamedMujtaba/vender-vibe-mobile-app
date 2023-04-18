import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Text, TextInput, I18nManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import { store, persistor, RootState } from "./Redux/store";
// import SwitchNavigation from "./Navigation/SwitchNavigation";
import { useColorScheme } from "nativewind";
// import { i18n } from "./src/utils/localizations";
import { FC, ReactNode, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home.screen";
import SeeAll from "./src/screens/SeeAll";
import StackNavigation from "./src/navigation/Stack.navigation";
import { persistor, store } from "./src/redux/store";

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}
interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(
  TextInput as unknown as TextInputWithDefaultProps
).defaultProps!.allowFontScaling = false;
// i18n.locale = "ar";

export default function App(): ReactNode {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatfullApp />
      </PersistGate>
    </Provider>
  );
}

const StatfullApp: FC = () => {
  // const { language } = useSelector((state: RootState) => state.lang);
  // const { isDark } = useSelector((state: RootState) => state.colorMode);

  const { setColorScheme, colorScheme } = useColorScheme();
  // useEffect(() => {
  //   if (isDark) {
  //     setColorScheme("dark");
  //   }
  //   if (!isDark) {
  //     setColorScheme("light");
  //   }
  // }, [isDark]);
  return (
    <SafeAreaProvider>
      <StatusBar
      // translucent
      // style={colorScheme === "dark" ? "light" : "dark"}
      />
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        {/* <Home /> */}
        <StackNavigation />
        {/* <SeeAll /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
