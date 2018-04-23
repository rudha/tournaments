import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import NewTournament from './NewTournament';
import Tournament from './Tournament';

class Main extends React.Component {
	state = {
		tournament: {
			name: "",
			player1: "",
			player2: "",
			player3: "",
			player4: "",
		},
	};
	getTournamentsHandler = async () => {
		try {
			let tournament = await AsyncStorage.getItem('@tournament');
			if (tournament) {
				await this.setState({ tournament: JSON.parse(tournament) });
			}
		}
		catch (error) {
			alert(error);
		}
	};
	newTournamentHandler = () => {
		this.props.navigation.navigate('NewTournament');
	};
	tournamentViewHandler = () => {
		this.props.navigation.navigate('Tournament', { tournament: this.state.tournament });
	};
	render() {
		this.getTournamentsHandler();
		let tournaments = (
			<TouchableOpacity onPress={this.tournamentViewHandler} >
				<Text>{this.state.tournament.name}</Text>
			</TouchableOpacity>
		);
		return (
			<View style={styles.container}>
				{/* <StatusBar	
					translucent
					backgroundColor="transparent"
     				barStyle="light-content"
				/> */}
				<ScrollView>
					{tournaments}
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
		Home: { screen: Main },
		NewTournament: { screen: NewTournament },
		Tournament: { screen: Tournament },
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
