import React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

export default players = (props) => {
	return (
		<View>
			<TextInput onChangeText={() => props.player()} value={props.value} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});