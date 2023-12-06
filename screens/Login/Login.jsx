
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../context/auth/authContext';
import { Button } from 'react-native';
import { COLORS } from '../../constants/theme';
import { ScrollView } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, state: {error } } = useAuthContext();
  const handleLogin = async () => {
    const result = await login(email, password);

    if(result === 'OK'){
      setTimeout(() => {
        navigation.navigate('Home');

      }, 500)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My new homie</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error === "Access Denied" && (
        <Text style={styles.error}>Wrong email or password. Please try again.</Text>
      )}

      <Button style={styles.input}title='Login' onPress={handleLogin}/>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register here.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: COLORS.white,
		display: 'flex',
		justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
	},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    width: '80%',
  },
  button: {
    borderRadius: 4,
    padding: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    color: 'blue',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
