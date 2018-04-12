import React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Player from './Player';

export default class Tournament extends React.Component {
	onContinueHandler = () => {
		this.props.navigation.navigate('Players')
	}
	state = {
		name: "Tournament Name",
		player1: "Player 1 Name",
		player2: "Player 2 Name",
		player3: "Player 3 Name",
		player4: "Player 4 Name",
	}
	static navigationOptions = {
		title: 'New Tournament',
		headerTitleStyle: {
			fontWeight: 'normal',
		},
	};
	render() {
		return (
			<View style={styles.container}>
				<TextInput onChangeText={(name) => this.setState({name})} value={this.state.name} />
				<Player player={this.state.player1} value={this.state.player1} />
				<Player player={this.state.player2} value={this.state.player2} />
				<Player player={this.state.player3} value={this.state.player3} />
				<Player player={this.state.player4} value={this.state.player4} />
				<Button title="SAVE" onPress={this.onContinueHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});