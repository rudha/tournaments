import React from 'react';
import {Text, View, TextInput, StyleSheet, Button, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class NewTournament extends React.Component {
	state = {
		name: "",
		player1: "",
		player2: "",
		player3: "",
		player4: "",
	}
	onContinueHandler = () => {
		console.log("tournament saved");
		let tournament = {
			name: this.state.name,
			player1: this.state.player1,
			player2: this.state.player2,
			player3: this.state.player3,
			player4: this.state.player4,
		};
		//console.log(tournament);
		AsyncStorage.setItem('@tournament', JSON.stringify(tournament));
			// .then(tournament => {
			// 	console.log("NewTournament", tournament);
			// });
		this.props.navigation.goBack();
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
				<TextInput
					onChangeText={(name) => this.setState({name})}
					value={this.state.name}
					placeholder="Tournament Name"
				/>
				<TextInput onChangeText={(player1) => this.setState({player1})} value={this.state.player1} placeholder="Player" />
				<TextInput onChangeText={(player2) => this.setState({player2})} value={this.state.player2} placeholder="Player" />
				<TextInput onChangeText={(player3) => this.setState({player3})} value={this.state.player3} placeholder="Player" />
				<TextInput onChangeText={(player4) => this.setState({player4})} value={this.state.player4} placeholder="Player" />
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