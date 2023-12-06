import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useSignUp } from '../../hooks/useRegister';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { genderValues } from './utils';
import { RadioGroup } from 'react-native-radio-buttons-group';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [repeatPasswordError, setRepeatPasswordError] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');

	const { signUp, status, isLoading, error } = useSignUp()


	const handleRegister = async () => {
		const isValid = !emailError && !passwordError && !repeatPasswordError && !phoneNumberError;
		if(!isValid){
			return;
		}

		await signUp({
			firstname: firstName,
			lastname: lastName,
			email,
			password,
			age,
			gender,
			phonenumber: phoneNumber,
		})
	}
	

	const validateEmail = () => {
		// email validation logic here
		if (!email.includes('@')) {
			setEmailError('Invalid email address');
		} else {
			setEmailError('');
		}
	};

	const validatePassword = () => {
		// password validation logic here
		if (password.length < 8) {
			setPasswordError('Password must be at least 8 characters long');
		} else {
			setPasswordError('');
		}
	};

	const validateRepeatPassword = () => {
		// repeat password validation logic here
		if (password !== repeatPassword) {
			setRepeatPasswordError('Passwords do not match');
		} else {
			setRepeatPasswordError('');
		}
	};

	const validatePhoneNumber = () => {
		// phone number validation logic here
		if (phoneNumber.length !== 9) {
			setPhoneNumberError('Phone number must be 9 digits long');
		} else {
			setPhoneNumberError('');
		}
	};

	const radioButtons = useMemo(() => ([
		{
				id: '1', // acts as primary key, should be unique and non-empty string
				label: 'Male',
				value: 'M'
		},
		{
				id: '2',
				label: 'Female',
				value: 'F',
		},
		{
				id: '3',
				label: 'Other',
				value: 'O',
		}
]), []);

const [selectedId, setSelectedId] = useState();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.label}>Register</Text>
			<TextInput
			placeholder='First Name'
				style={styles.input}
				value={firstName}
				onChangeText={setFirstName}
			/>
			<TextInput
			placeholder='Last Name'
				style={styles.input}
				value={lastName}
				onChangeText={setLastName}
			/>
			<TextInput
			placeholder='Email'
				style={styles.input}
				value={email}
				onChangeText={setEmail}
				onBlur={validateEmail}
			/>
			{emailError ? <Text style={styles.error}>{emailError}</Text> : null}
			<TextInput
			placeholder='Password'
				style={styles.input}
				value={password}
				onChangeText={setPassword}
				onBlur={validatePassword}
				secureTextEntry
			/>
			{passwordError ? (
				<Text style={styles.error}>{passwordError}</Text>
			) : null}
			<TextInput
			placeholder='Repeat Password'
				style={styles.input}
				value={repeatPassword}
				onChangeText={setRepeatPassword}
				onBlur={validateRepeatPassword}
				secureTextEntry
			/>
			{repeatPasswordError ? (
				<Text style={styles.error}>{repeatPasswordError}</Text>
			) : null}
			<TextInput style={styles.input} value={age} onChangeText={setAge} 
			keyboardType="numeric"
			placeholder='Age'
			/>

<RadioGroup 
						radioButtons={radioButtons} 
						onPress={setSelectedId}
						selectedId={selectedId}
						style={styles.radioGroup}
				/>

			 
			<TextInput
				placeholder='Phonenumber'
				style={styles.input}
				value={phoneNumber}
				onChangeText={setPhoneNumber}
				onBlur={validatePhoneNumber}
				keyboardType="numeric"
			/>
			{phoneNumberError ? (
				<Text style={styles.error}>{phoneNumberError}</Text>
			) : null}
			<Button title={isLoading ? 'Please wait...' : 'Register'} onPress={handleRegister} />

			{error && <Text style={styles.error}>{error}</Text>}
			{status === 201 && <Text style={styles.error}>Registration successful!</Text>}


		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
		backgroundColor: COLORS.white,
		display: 'flex',
		justifyContent: 'center',
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	error: {
		color: 'red',
		marginBottom: 10,
	},
	radioGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	
		marginBottom: 10,
		}
});

export default Register;


