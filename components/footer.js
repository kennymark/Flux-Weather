import React, { Component } from "react";
import Pages from "./../routes";
import { Actions } from "react-native-router-flux";
import { Text, Icon, Input, FooterTab, Footer, Button } from "native-base";

class footer extends Component {
  constructor(props) {
    super();
    state = {};
  }
  goHome = () => {
    Actions.home();
  };
  goSearch = () => {
    Actions.location();
  };
  goSettings = () => {
    Actions.settings();
  };
  render() {
    return (
      <Footer>
        <FooterTab style={{ backgroundColor: "white" }}>
          <Button onPress={this.goHome}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button active onPress={this.goSearch}>
            <Icon active name="search" />
            <Text>Search</Text>
          </Button>
          <Button>
            <Icon name="pulse" />
            <Text>Graph</Text>
          </Button>
          <Button onPress={this.goSettings}>
            <Icon name="settings" />
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default footer;
