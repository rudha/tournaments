import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default players = (props) => {
	return (
		<View>
			<TextInput onChangeText={props.onInput} value={props.value} placeholder="Player" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});