import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen, ScreenLanangan} from '../Screen';

const StackNavigation = createStackNavigator();

const Router = () => {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <StackNavigation.Screen
                name="ScreenLanangan"
                component={ScreenLanangan}
            />
        </StackNavigation.Navigator>
    );
};

export default Router;
