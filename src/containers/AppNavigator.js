import React from 'react';
import { Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Onboarding from './Onboarding';
import Home from './Home';
import { getFontSize } from '../helpers/DynamicSize';
import Result from './Result';

const MainTabNavigator = createBottomTabNavigator(
  {
    home: Home,
    result: Result,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'result') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let bottomLabel;
        if (routeName === 'home') {
          bottomLabel = `${focused ? 'Home' : 'Home'}`;
        } else {
          bottomLabel = `${focused ? 'BitcoinCash' : 'Result'}`;
        }
        return <Text style={{ color: tintColor, fontSize: getFontSize(10), textAlign: 'center' }}>{ bottomLabel }</Text>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export const MainNavigator = StackNavigator(
  {
    // landing: {
    //   screen: Onboarding,
    // },
    tabs: {
      screen: MainTabNavigator
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
