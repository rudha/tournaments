import React from 'react';
import { Text, View, StyleSheet, ViewPagerAndroid } from 'react-native';

export default class Tournament extends React.Component {
	state = {
		player1: "",
		player2: "",
		player3: "",
		player4: "",
	}

	static navigationOptions = {
		title: 'Tournament',
		headerTitleStyle: {
			fontWeight: 'normal',
		},
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<ViewPagerAndroid style={styles.container} initialPage={0}>
				<View style={styles.pageStyle} key="1">
					<Text>{params.tournament.name}</Text>
					<Text>Player 1: {params.tournament.player1}</Text>
					<Text>Player 2: {params.tournament.player2}</Text>
					<Text>Player 3: {params.tournament.player3}</Text>
					<Text>Player 4: {params.tournament.player4}</Text>
				</View>
				<View style={styles.pageStyle} key="2">
					<Text>{params.tournament.player1} vs {params.tournament.player2}</Text>
					<Text>{params.tournament.player3} vs {params.tournament.player4}</Text>
				</View>
			</ViewPagerAndroid>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	pageStyle: {
		alignItems: 'center',
		padding: 10,
	},
});