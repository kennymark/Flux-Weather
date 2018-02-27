import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Header } from 'react-native-elements';
class Nav extends Component {
	render() {
		return (
			<Header
				backgroundColor="lightblue"
				centerComponent={{
					text: this.props.title,
					style: { fontSize: 19, color: 'white', fontWeight: 'bold' }
				}}
			/>
		);
	}
}

export default Nav;
