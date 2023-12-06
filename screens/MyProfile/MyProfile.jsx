import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function MyProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigation = useNavigation();

  const handleSave = () => {
    // Save the user's profile data
  };

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  // Navigate to Characteristics screen
  const handleNavigateToCharacteristics = () => {
    navigation.navigate('Characteristics');
  };

  // Add button to header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleNavigateToCharacteristics}>
          <Text style={styles.headerButton}>Characteristics</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePickImage}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Text style={styles.profilePicturePlaceholderText}>Add Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profilePicturePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    marginRight: 10,
    color: '#000',
    fontSize: 16,
  },
});
      