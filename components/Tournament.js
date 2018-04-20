import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Tournament extends React.Component {
	static navigationOptions = {
		title: 'Tournament',
		headerTitleStyle: {
			fontWeight: 'normal',
		},
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={styles.container}>
				<Text>{params.tournament.name}</Text>
				<Text>Player 1: {params.tournament.player1}</Text>
				<Text>Player 2: {params.tournament.player2}</Text>
				<Text>Player 3: {params.tournament.player3}</Text>
				<Text>Player 4: {params.tournament.player4}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});