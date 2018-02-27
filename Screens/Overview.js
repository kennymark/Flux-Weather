import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import hourly from './../hourly';
import Nav from './../components/header';
class Overview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hourly: hourly,
			bg: [ '#353941', '#4d4545', 'burlywood', 'lightgray', 'lightblue', 'turquoise' ]
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
	celsius(deg) {
		return Math.floor((deg - 32) * 5 / 9) + '°C';
	}
	randColor = () => {
		const { bg } = this.state;
		var num = Math.floor(Math.random() * (bg.length - 0) + 0);

		return bg[num];
	};

	componentDidMount() {
		console.log(this.randColor());
	}
	render() {
		const { params } = this.props.navigation.state;
		const itemId = params ? params.itemId : null;
		const otherParam = params ? params.otherParam : null;
		const hourSummary = params ? params.hourly : null;

		return (
			<View>
				<Nav title="Overview" />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.container}>
						{this.state.hourly.map((hour) => {
							var date = hour.time * 1000;
							var convert = new Date(date);
							return (
								<View style={styles.center} key={hour.time}>
									<View style={styles.temtime}>
										<Text style={styles.temp}>{this.celsius(hour.temperature)}</Text>
										<Text style={{ color: 'black' }}>{convert.toLocaleTimeString()}</Text>
									</View>

									<View style={styles.weatherCard}>
										<Image style={styles.icon} source={this.icons[hour.icon]} />
										<Text style={{ color: 'black' }}>{hour.summary}</Text>
									</View>
								</View>
							);
						})}
					</View>

					<Text>itemId: {JSON.stringify(itemId)}</Text>
					<Text>otherParam: {JSON.stringify(otherParam)}</Text>
					<Button title="Go to Details... again" onPress={() => this.props.navigation.navigate('Details')} />
					<Button title="Go back" onPress={() => this.props.navigation.goBack()} />
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 10
	},
	center: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		height: 80,
		width: '90%',
		borderRadius: 10,
		margin: 10,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#efefef'
	},
	weatherCard: {
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	temp: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingBottom: 10
	},
	temptime: {
		borderWidth: 1,
		flexDirection: 'column'
	},
	icon: {
		alignSelf: 'flex-end',
		height: 32,
		width: 32,
		paddingBottom: 10
	}
});
export default Overview;
