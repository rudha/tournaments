import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import NewTournament from './NewTournament';
import Tournament from './Tournament';

const styles = StyleSheet.create({
	container: {
		flex: 1
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
		fontSize: 24
	}
});

class Main extends React.Component {
	state = {
		tournament: {
			name: '',
			player1: '',
			player2: '',
			player3: '',
			player4: ''
		}
	};
	getTournamentsHandler = async () => {
		try {
			const tournament = await AsyncStorage.getItem('@tournament');
			if (tournament) {
				await this.setState({ tournament: JSON.parse(tournament) });
			}
		} catch (error) {
			// eslint-disable-next-line no-alert
			alert(error);
		}
	};
	newTournamentHandler = () => {
		this.props.navigation.navigate('NewTournament');
	};
	tournamentViewHandler = () => {
		this.props.navigation.navigate('Tournament', {
			tournament: this.state.tournament
		});
	};
	render() {
		this.getTournamentsHandler();
		const tournaments = (
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
				<TouchableOpacity
					style={styles.addButton}
					onPress={this.newTournamentHandler}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const RootStack = StackNavigator(
	{
		Home: { screen: Main },
		NewTournament: { screen: NewTournament },
		Tournament: { screen: Tournament }
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			title: 'Tournaments',
			headerStyle: {
				backgroundColor: '#2196F3'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default RootStack;
