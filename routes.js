import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//importing screens from react-native
import HomeScreen from './Screens/HomeScreen';
import LocationScreen from './Screens/LocationsScreen';
import OverviewScreen from './Screens/Overview';
import SettingsScreen from './Screens/SettingsScreen';
import DayForecastScreen from './Screens/SpecificDay';

const HomeStack = StackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		Specific: {
			screen: DayForecastScreen,
			navigationOptions: {
				headerTitle: 'Today'
			}
		}
	},
	{
		mode: 'modal',
		headerMode: 'float'
		/* transitionConfig: () => ({
			transitionSpec: {
				duration: 400,
				timing: Animated.timing,
				easing: Easing.step0
			}
		}) */
	}
);

export default TabNavigator(
	{
		Home: {
			screen: HomeStack,
			navigationOptions: {
				title: 'Today'
			}
		},
		Overview: { screen: OverviewScreen },
		Location: {
			screen: LocationScreen,
			navigationOptions: {
				title: 'Places'
			}
		},
		Settings: { screen: SettingsScreen }
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-home${focused ? '' : '-outline'}`;
				} else if (routeName === 'Location') {
					iconName = `ios-compass${focused ? '' : '-outline'}`;
				} else if (routeName === 'Overview') {
					iconName = `ios-pulse`;
				} else if (routeName === 'Settings') {
					iconName = `ios-settings${focused ? '' : '-outline'}`;
				}

				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: '#2874F0',
			inactiveTintColor: '#2874F0',
			activeBackgroundColor: '#cde1f9',
			labelStyle: {
				fontSize: 0
			},
			style: {
				backgroundColor: 'white',
				height: 55
			}
		},
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false
	}
);
