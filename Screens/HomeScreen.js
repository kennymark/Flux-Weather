import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import days from './../days';
import styles from './../styles';
import { Platform } from 'react-native';
import { Permissions, Notifications } from 'expo';

import { Alert, Text, View, Button, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground, Vibration, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feels: '',
			date: '',
			forecast: [],
			weather: '',
			summary: '',
			hourlySummary: [],
			days: [],
			city: '',
			country: '',
			lat: '',
			currentIcon: ''
		};

		this.icons = {
			'partly-cloudy-day': require('./../weather-icons/partly-cloudy-day.png'),
			'partly-cloudy-night': require('./../weather-icons/partly-cloudy-night.png'),
			'clear-day': require('./../weather-icons/clear-day.png'),
			'clear-night': require('./../weather-icons/clear-night.png'),
			rain: require('./../weather-icons/rain.png'),
			snow: require('./../weather-icons/snow.png'),
			sleet: require('./../weather-icons/sleet.png'),
			wind: require('./../weather-icons/wind.png'),
			fog: require('./../weather-icons/fog.png'),
			cloudy: require('./../weather-icons/cloudy.png'),
			hail: require('./../weather-icons/hail.png'),
			thunderstorm: require('./../weather-icons/thunderstorm.png'),
			tornado: require('./../weather-icons/tornado.png'),
			'meteor-shower': require('./../weather-icons/meteor-shower.png'),
			default: require('./../weather-icons/default.png')
		};
	}
	componentDidMount() {
		this.getWeather();
		this.getLocationViaIP();

		const { status } = Permissions.getAsync(Permissions.NOTIFICATIONS);
		if (status !== 'granted') {
			Permissions.askAsync(Permissions.NOTIFICATIONS);
		}
	}

	getLocationViaIP() {
		var geoIp = 'https://geoip.nekudo.com/api/';
		return fetch(geoIp)
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					city: data.city,
					country: data.country.code,
					lat: data.location.latitude,
					lon: data.location.longitude
				});
				return this.state.lat + ',' + this.state.lon;
			})
			.catch((err) => err);
	}

	getWeather() {
		let lat = 53.198235;
		let lon = -2.8985573;
		const API_KEY = '0b8570e06651ffb7c5078b511c6dcbec';
		var url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					weather: Math.round((data.currently.temperature - 32) * 5 / 9),
					feels: Math.round((data.currently.apparentTemperature - 32) * 5 / 9),
					summary: data.minutely.summary,
					forecast: data.daily.data,
					hourly: data.hourly.data,
					currentIcon: data.currently.icon
				});
			})
			.catch((err) => err);
	}
	get timeMachine() {
		var url = `https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]`;
		console.log(this.state);
	}
	getSpecificForecast = () => {
		let navigateTo = this.props.navigation.navigate;
		Vibration.vibrate(5);
		/* 	Notifications.presentLocalNotificationAsync({
			title: 'Hello',
			body: 'It is getting cold outchea',
			ios: {
				sound: true
			},
			android: {
				sound: true,
				color: '#2874F0'
			}
		}); */

		navigateTo('Specific', {
			hourly: this.state.hourly,
			itemId: 86,
			otherParam: 'anything you want here'
		});
		//this.props.navigation.navigate("Location");
	};
	celsius(deg) {
		return Math.round((deg - 32) * 5 / 9) + '°C';
	}

	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<ImageBackground style={styles.main} source={require('./../assets/images/cold.jpg')}>
						<Text style={[ styles.location, styles.shadow ]}>{this.state.city}</Text>

						<Text style={[ styles.weather, styles.shadow ]}>
							{this.state.weather}°C <Image style={{ marginRight: 20, height: 52, width: 52 }} source={this.icons[this.state.currentIcon]} />
						</Text>

						<Text style={styles.fontS}>{this.state.summary}</Text>
						{<Text style={styles.feels}>Feels Like {this.state.feels}°C</Text>}
					</ImageBackground>

					{this.state.forecast.slice(0, 5).map((y) => {
						var d = new Date(y.time * 1000);
						var dayofWeek = days[d.getDay()];
						console.log(this.state.currentIcon);
						return (
							<TouchableOpacity style={styles.center} key={y.dewPoint} onPress={this.getSpecificForecast}>
								<View style={styles.weatherCard}>
									<Text style={styles.day}>{dayofWeek}</Text>
									<Image style={{ marginRight: 20, height: 32, width: 32 }} source={this.icons[y.icon]} />
									<Text style={styles.val}>{this.celsius(y.temperatureHigh)}</Text>
									<Text style={styles.val}>{this.celsius(y.temperatureLow)}</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</View>
			</ScrollView>
		);
	}
}
