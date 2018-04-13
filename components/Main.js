import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';

import NewTournament from './NewTournament';
import Tournament from './Tournament';

class Main extends React.Component {
	state = {
		tournamentArray: [],
	}
	newTournamentHandler = () => {
		this.props.navigation.navigate('Tournament')
	}
	componentDidMount () {
		AsyncStorage.getItem(/*this.state.name*/"key", (error, result) => {
			console.log("componentWillMount");
			console.log(result);
			console.log(error);
			this.state.tournamentArray.push({result});
		});
	};
	render() {
		let tournament = this.state.tournamentArray.map((value, key) => {
    		return <Tournament key={key} value={value}/>
        });
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
		Tournament: {screen: NewTournament},
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
        fontSize: 24
    }
});
