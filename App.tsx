import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";

import { Background } from "./src/components/Background";
import { Main } from "./src/screens/Main";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // function App() {
  //   const [user, setUser] = useState(null);

  //   const actionLoginDataGoogle = async (u) => {
  //     let newUser = {
  //       id: u.id,
  //       name: u.displayName,
  //       avatar: u.photoURL
  //     }

  //     // setUser(newUser);

  //   }

  // //   if (user === null) {
  // //     return <SignIn onReceiveGoogle={actionLoginDataGoogle} />
  // //   };
  // // }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Main/>
    </Background>
  );
}

