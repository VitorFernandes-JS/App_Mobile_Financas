import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_100Thin, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold, Raleway_900Black  } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import { theme } from "./src/global/styles/theme";

import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_100Thin, 
    Raleway_200ExtraLight, 
    Raleway_300Light, 
    Raleway_400Regular, 
    Raleway_500Medium, 
    Raleway_600SemiBold, 
    Raleway_700Bold, 
    Raleway_800ExtraBold, 
    Raleway_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
    <StatusBar
    hidden
    backgroundColor={theme.colors.color2}
    translucent={true}
    />
      <Routes />
    </Background>
  );
}
