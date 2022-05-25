import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Calculator } from '../screens/Calculator';
import { Comparator } from '../screens/Comparator';
import { Indexes } from '../screens/Indexes';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: (theme.colors.background)
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Calculator"
                component={Calculator}
            />
            <Screen
                name="Comparator"
                component={Comparator}
            />
            <Screen
                name="Indexes"
                component={Indexes}
            />
        </Navigator>
    )
}