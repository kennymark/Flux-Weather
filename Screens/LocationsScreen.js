import React, { Component } from 'react';
import Footer from './../components/footer';
import { Container, Content, Card, CardItem, Text, Icon, Item, Input, Header, Button } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import Nav from './../components/header';

export default class LocationScreen extends Component {
	weatherSearch = (e) => {
		console.log(e);
	};
	render() {
		return (
			<Container>
				<Header searchBar rounded>
					<Item>
						<Icon name="ios-search" />
						<Input placeholder="Search" />
						<Icon name="ios-navigate" />
					</Item>
					<Button transparent>
						<Text>Search</Text>
					</Button>
				</Header>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
