import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	main: {
		height: 350,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFC97C',
		alignSelf: 'stretch'
	},
	date: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white'
	},
	location: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	},
	weather: {
		fontSize: 90,
		fontWeight: 'bold',
		color: 'white'
	},
	/*   shadow: {
    shadowColor: "#FAAC64",
    shadowOffset: {
      width: 5,
      height: 4
    },
    shadowOpacity: 1
  }, */
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 80,
		alignSelf: 'stretch',
		borderColor: '#efefef',
		borderWidth: 0.5
	},
	weatherCard: {
		justifyContent: 'center',
		flexDirection: 'row',
		elevation: 5
	},
	val: {
		marginRight: 20,
		fontSize: 20,
		color: '#525151',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	day: {
		fontSize: 20,
		fontWeight: 'bold',
		width: 130
	},

	fontS: { color: 'white', fontWeight: 'bold', marginTop: 20 },
	feels: {
		position: 'absolute',
		color: '#ddd',
		fontWeight: 'bold',
		right: 35,
		top: 320,
		fontWeight: 'bold'
	}
});

export default styles;
