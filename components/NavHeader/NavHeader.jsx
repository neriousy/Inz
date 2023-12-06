import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useAuthContext } from '../../context/auth/authContext';
import { useEffect } from 'react';

const NavHeader = ({ navigation }) => {
  const { dispatch, state: { user} } = useAuthContext();
  
  useEffect(() => {
    if(!user){
      navigation.navigate('Login');
    }
  }, [user])
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
        <Ionicons name="person-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Ionicons name="chatbubble-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch({ type: 'LOGOUT'})}>
        <MaterialIcons name="logout" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: StatusBar.currentHeight + 10,
    left: 0,
    right: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton:{
    position: 'absolute',
    right: 0,
  }
});

export default NavHeader;
