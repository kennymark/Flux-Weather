import React, { Component } from 'react';
import { Platform } from 'react-native';
import Pages from './routes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	async componentWillMount() {
		// await Expo.Font.loadAsync({
		// 	Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		// });
		// this.setState({ isReady: false });
	}
	render() {
		// if (this.state.loading) {
		// 	return <Expo.AppLoading />;
		// }
		return <Pages />;
	}
}

export default App;
