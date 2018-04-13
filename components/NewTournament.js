import React from 'react';
import {Text, View, TextInput, StyleSheet, Button, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Player from './Player';

export default class NewTournament extends React.Component {
	onContinueHandler = () => {
		console.log("tournament saved");
		let tournament = {
			name: this.state.name,
			player1: this.state.player1,
			player2: this.state.player2,
			player3: this.state.player3,
			player4: this.state.player4,
		};
		AsyncStorage.setItem(/*this.state.name*/"key" , JSON.stringify(tournament), () => {
			AsyncStorage.getItem(/*this.state.name*/"key", (error, result) => {
				console.log(result);
			});
		});
		this.props.navigation.goBack();
	}
	state = {
		name: "",
		player1: "",
		player2: "",
		player3: "",
		player4: "",
	}
	// componentWillUpdate(nextProps, nextState) {
	// 	console.log("[componentWillUpdate on Tournament]", nextProps, nextState);
	// }
	static navigationOptions = {
		title: 'New Tournament',
		headerTitleStyle: {
			fontWeight: 'normal',
		},
	};
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					onChangeText={(name) => this.setState({name})}
					value={this.state.name}
					placeholder="Tournament Name"
				/>
				<Player onInput= {(player1) => this.setState({player1})} value={this.state.player1} />
				<Player onInput= {(player2) => this.setState({player2})} value={this.state.player2} />
				<Player onInput= {(player3) => this.setState({player3})} value={this.state.player3} />
				<Player onInput= {(player4) => this.setState({player4})} value={this.state.player4} />
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