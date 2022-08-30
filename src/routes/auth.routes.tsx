import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { Calculator } from "../screens/Calculator";
import { Comparator } from "../screens/Comparator";
import { Indexes } from "../screens/Indexes";
import { Profile } from "../screens/Profile";
import { Wallet } from "../screens/Wallet";
import { WalletInvestment } from "../screens/Wallet_Investment";
import { Goals } from "../screens/Goals";
import { Financing } from "../screens/Financing";
import { Videos } from "../screens/Videos";
import { Loan } from "../screens/Loan";
import { Favorite } from "../screens/Favorite";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.color6,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Home" component={Home} />
      <Screen name="Calculator" component={Calculator} />
      <Screen name="Comparator" component={Comparator} />
      <Screen name="Indexes" component={Indexes} />
      <Screen name="Wallet" component={Wallet} />
      <Screen name="WalletInvestment" component={WalletInvestment} />
      <Screen name="Goals" component={Goals} />
      <Screen name="Videos" component={Videos} />
      <Screen name="Financing" component={Financing} />
      <Screen name="Loan" component={Loan} />
      <Screen name="Favorite" component={Favorite} />
    </Navigator>
  );
}
