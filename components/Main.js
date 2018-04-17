import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';

import NewTournament from './NewTournament';

class Main extends React.Component {
	state = {
		tournamentArray: [],
		tournament: {
			name: "",
			player1: "",
			player2: "",
			player3: "",
			player4: "",
		},
	}
	componentDidMount () {
		AsyncStorage.getItem('@tournament')
			.then(tournament => {
				console.log("AsyncStorage inside Main", JSON.parse(tournament));
				this.setState({tournament: JSON.parse(tournament)});
			});
	}
	newTournamentHandler = () => {
		this.props.navigation.navigate('NewTournament')
	}
	render() {
		let tournament = "tournament";
		if (this.state.tournament) {
			tournament = (
				<Text>{this.state.tournament.name}</Text>
			);
		}
		return (
			<View style={styles.container}>
			<ScrollView style={styles.content}>
				{tournament}
			</ScrollView>
			<TouchableOpacity style={styles.addButton} onPress={this.newTournamentHandler}>
				<Text style={styles.addButtonText}>+</Text>
			</TouchableOpacity>
			</View>
		);
	}
}

export default RootStack = StackNavigator(
	{
		Home: {screen: Main},
		NewTournament: {screen: NewTournament},
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			title: 'Tournaments',
			headerStyle: {
				backgroundColor: '#2196F3',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		marginBottom: 100
	},
	addButton: {
		position: 'absolute',
		zIndex: 11,
		right: 20,
		bottom: 20,
		backgroundColor: '#E91E63',
		width: 70,
		height: 70,
		borderRadius: 35,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8
	},
	addButtonText: {
		color: '#fff',
		fontSize: 24,
	},
});
