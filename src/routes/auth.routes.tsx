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
import { FixedIncome } from "../screens/FixedIncome_Videos";
import { Actions } from "../screens/Actions_Videos";
import { FIIS } from "../screens/FIIS_Videos";
import { MobileApp } from "../screens/MobileApp_Videos";
import { Cripto } from "../screens/Cripto_Videos";
import { Economy } from "../screens/Economy_Videos";
import { Home_Calculator } from "../screens/Home_Calculator";
import { Home_Finance } from "../screens/Home_Finance";
import { InformationsGoals } from "../screens/Goals/InformationsGoals";


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
      <Screen name="FixedIncome" component={FixedIncome} />
      <Screen name="Actions" component={Actions} />
      <Screen name="FIIS" component={FIIS} />
      <Screen name="MobileApp" component={MobileApp} />
      <Screen name="Cripto" component={Cripto} />
      <Screen name="Economy" component={Economy} />
      <Screen name="Home_Calculator" component={Home_Calculator} />
      <Screen name="Home_Finance" component={Home_Finance} />
      <Screen name="InformationsGoals" component={InformationsGoals} />
    </Navigator>
  );
}
