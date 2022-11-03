import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { Calculator } from "../screens/Calculator";
import { Comparator } from "../screens/Comparator";
import { News } from "../screens/News";
import { Profile } from "../screens/Profile";
import { Wallet } from "../screens/Wallet";
import { WalletInvestment } from "../screens/Wallet_Investment";
import { Goals } from "../screens/Goals";
import { Financing_Vechule } from "../screens/Financing_Vechule";
import { Financing_Residential } from "../screens/Financing_Residential";
import { Videos } from "../screens/Videos";
import { WatchingVideo } from "../screens/Videos/WatchingVideo";
import { Loan } from "../screens/Loan";
import { Favorite } from "../screens/Favorite";
import { CategoryVideos } from "../screens/Category_Videos";
import { Home_Finance } from "../screens/Home_Finance";
import { InformationsGoals } from "../screens/Goals/InformationsGoals";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <NavigationContainer independent={true}>
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
        <Screen name="News" component={News} />
        <Screen name="Wallet" component={Wallet} />
        <Screen name="WalletInvestment" component={WalletInvestment} />
        <Screen name="Goals" component={Goals} />
        <Screen name="Videos" component={Videos} />
        <Screen name="WatchingVideo" component={WatchingVideo} />
        <Screen name="Financing_Vechule" component={Financing_Vechule} />
        <Screen name="Financing_Residential" component={Financing_Residential} />
        <Screen name="Loan" component={Loan} />
        <Screen name="Favorite" component={Favorite} />
        <Screen name="CategoryVideos" component={CategoryVideos} />
        <Screen name="Home_Finance" component={Home_Finance} />
        <Screen name="InformationsGoals" component={InformationsGoals} />
      </Navigator>
    </NavigationContainer>
  );
}
