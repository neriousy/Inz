import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavHeader from '../../components/NavHeader/NavHeader';
import { useAuthContext } from '../../context/auth/authContext';

const Home = ({ navigation }) => {
  const handleFindRoommatePress = () => {
    navigation.navigate('Search');
  };

  const { state: { user } }=  useAuthContext();
  if(!user){
    navigation.navigate('Login');
  }


  return (
    <View style={styles.container}>
      <NavHeader navigation={navigation}/>
      <Text style={styles.title}>Welcome to My New Homie!</Text>
      <Text style={styles.subtitle}>Find your perfect roommate today.</Text>
      <Button
        title="Find a Roommate"
        onPress={handleFindRoommatePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});

export default Home;
