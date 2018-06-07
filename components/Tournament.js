import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	ViewPagerAndroid,
	Switch
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},
	pageStyle: {
		alignItems: 'center',
		padding: 10
	},
	matchRow: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start'
	}
});

export default class Tournament extends React.Component {
	static navigationOptions = {
		title: 'Tournament',
		headerTitleStyle: {
			fontWeight: 'normal'
		}
	};

	state = {
		winner1: '',
		winner2: '',
		loser1: '',
		loser2: '',
		phase2: false,
		phase3: false
	}

	bracketDistributionHandler = (winner, loser, match) => {
		if (match === 1) {
			this.setState({ winner1: winner });
			this.setState({ loser1: loser });
		} else {
			this.setState({ winner2: winner });
			this.setState({ loser2: loser });
		}
	}

	nextPhaseHandler(phase) {
		if (phase === 2) {
			this.setState({ phase2: !this.state.phase2 });
			this.setState({ phase3: false });
		}
		if (phase === 3) {
			this.setState({ phase3: !this.state.phase3 });
		}
	}

	render() {
		const { params } = this.props.navigation.state;
		let phase2 = null;
		let phase3 = null;
		if (this.state.phase2) {
			phase2 = (
				<View>
					<View style={styles.matchRow}>
						<Text style={{ fontWeight: 'bold' }}>
							Winner Bracket
						</Text>
					</View>
					<View style={styles.matchRow}>
						<Button
							title='WINNER'
							onPress={() => this.bracketDistributionHandler(
								params.tournament.player1,
								params.tournament.player2,
								1,
							)}
						/>
						<Text>
							{this.state.winner1} vs {this.state.winner2}
						</Text>
						<Button
							title='WINNER'
							onPress={() => this.bracketDistributionHandler(
								params.tournament.player1,
								params.tournament.player2,
								1,
							)}
						/>
					</View>
					<View style={styles.matchRow}>
						<Text style={{ fontWeight: 'bold' }}>
							Loser Bracket
						</Text>
					</View>
					<View style={styles.matchRow}>
						<Text>{this.state.loser1} vs {this.state.loser2}</Text>
					</View>
					<View style={styles.matchRow}>
						<Switch
							value={this.state.phase3}
							onValueChange={() => this.nextPhaseHandler(3)}
						/>
						<Text>Next Phase</Text>
					</View>
				</View>

			);
		}
		if (this.state.phase3) {
			phase3 = (
				<View style={styles.matchRow}>
					<Text>Loser Bracket</Text>
					<Text>{this.state.loser1} vs {this.state.loser2}</Text>
				</View>
			);
		}

		return (
			<ViewPagerAndroid style={styles.container} initialPage={0}>
				<View style={styles.pageStyle} key='1'>
					<Text>{params.tournament.name}</Text>
					<Text>Player 1: {params.tournament.player1}</Text>
					<Text>Player 2: {params.tournament.player2}</Text>
					<Text>Player 3: {params.tournament.player3}</Text>
					<Text>Player 4: {params.tournament.player4}</Text>
				</View>
				<View style={styles.pageStyle} key='2'>
					<View style={styles.matchRow}>
						<Button
							title='WINNER'
							onPress={() => this.bracketDistributionHandler(
								params.tournament.player1,
								params.tournament.player2,
								1,
							)}
						/>
						<Text>
							{params.tournament.player1}
							vs
							{params.tournament.player2}
						</Text>
						<Button
							title='WINNER'
							onPress={() => this.bracketDistributionHandler(
								params.tournament.player2,
								params.tournament.player1,
								1,
							)}
						/>
					</View>
					<View style={styles.matchRow}>
						<Button
							title='WINNER'
							onPress={() => this.bracketDistributionHandler(
								params.tournament.player3,
								params.tournament.player4,
								2,
							)}
						/>
						<Text>
							{params.tournament.player3}
							vs
							{params.tournament.player4}
						</Text>
						<Button
							title='WINNER'
							onPress={() => this.bracketDistributionHandler(
								params.tournament.player4,
								params.tournament.player3,
								2,
							)}
						/>
					</View>
					<Switch
						value={this.state.phase2}
						onValueChange={() => this.nextPhaseHandler(2)}
					/>
					<Text>Next Phase</Text>
					{phase2}
					{phase3}
				</View>
			</ViewPagerAndroid>
		);
	}
}
