import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';

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
        </Navigator>
    )
}