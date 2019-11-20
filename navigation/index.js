import React from 'react';
import { Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';


const AppNavigator = createStackNavigator({
    Home: {screen: Welcome},
    SignUp: {screen: SignUp},
}, {
    initialRouteName: 'SignUp',
});

const Navigation = createAppContainer(AppNavigator);

export default Navigation;