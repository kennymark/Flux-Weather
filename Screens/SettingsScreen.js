import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, List, ListItem, Input, Left, Right, Switch, Body, Icon } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import Nav from './../components/header';
import { View } from 'react-native';

export default class LocationScreen extends Component {
	constructor() {
		super();
		this.state = {
			switch: true,
			switch2: false
		};
	}
	weatherSearch = (e) => {
		console.log(e);
	};
	handleSwitch = () => {
		this.setState({
			switch: !this.state.switch
		});
	};
	handleSwitch2 = () => {
		this.setState({
			switch2: !this.state.switch2
		});
	};
	render() {
		return (
			<Container>
				<Nav title="Settings" />
				<Content>
					<List>
						<ListItem icon>
							<Left>
								<Icon name="thermometer" />
							</Left>
							<Body>
								<Text>Unit</Text>
							</Body>
							<Right>
								<Text>°C / °F </Text>
								<Switch value={this.state.switch} onValueChange={this.handleSwitch} />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="help-circle" />
							</Left>
							<Body>
								<Text>Help</Text>
							</Body>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="notifications" />
							</Left>
							<Body>
								<Text sytle={styles.text}>Notifcations</Text>
							</Body>
							<Right>
								<Switch value={this.state.switch2} onValueChange={this.handleSwitch2} />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="glasses" />
							</Left>
							<Body>
								<Text sytle={styles.text}>Interface</Text>
							</Body>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="information-circle" />
							</Left>
							<Body>
								<Text sytle={styles.text}>About</Text>
							</Body>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon name="card" />
							</Left>
							<Body>
								<Text sytle={styles.text}>Donate</Text>
							</Body>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
					</List>
				</Content>
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
	},
	text: {
		fontWeight: 'bold'
	}
});
