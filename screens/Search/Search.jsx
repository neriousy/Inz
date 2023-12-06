import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';


const Search = () => {
  const [city, setCity] = useState('');
  const [ageFrom, setAgeFrom] = useState('');
  const [ageTo, setAgeTo] = useState('');
  const [preferredGender, setPreferredGender] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const [isStudying, setIsStudying] = useState(false);
  const [isDrinking, setIsDrinking] = useState(false);
  const [isSmoking, setIsSmoking] = useState(false);

  const handleSearch = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>City:</Text>
      <Picker
        selectedValue={city}
        onValueChange={(itemValue) => setCity(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a city" value="" />
        <Picker.Item label="New York" value="New York" />
        <Picker.Item label="Los Angeles" value="Los Angeles" />
        <Picker.Item label="Chicago" value="Chicago" />
      </Picker>

      <Text style={styles.label}>Age:</Text>
      <View style={styles.ageContainer}>
        <Picker
          selectedValue={ageFrom}
          onValueChange={(itemValue) => setAgeFrom(itemValue)}
          style={styles.agePicker}
        >
          <Picker.Item label="From" value="" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
        </Picker>
        <Picker
          selectedValue={ageTo}
          onValueChange={(itemValue) => setAgeTo(itemValue)}
          style={styles.agePicker}
        >
          <Picker.Item label="To" value="" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="35" value="35" />
        </Picker>
      </View>

      <Text style={styles.label}>Preferred Gender:</Text>
      <Picker
        selectedValue={preferredGender}
        onValueChange={(itemValue) => setPreferredGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.label}>Habits:</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox 
          value={isSmoking}
          onValueChange={setIsSmoking}

        />
        <Text style={styles.checkboxLabel}>Smoking</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox 
          value={isWorking}
          onValueChange={setIsWorking}

        />

        <Text style={styles.checkboxLabel}>Working</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox 
          value={isStudying}
          onValueChange={setIsStudying}

        />

        <Text style={styles.checkboxLabel}>Studying</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox 
          value={isDrinking}
          onValueChange={setIsDrinking}

        />
        <Text style={styles.checkboxLabel}>Drinking</Text>
      </View>

      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Light mode
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000', // Black text for light mode
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#f2f2f2', // Lighter background for neumorphism
    color: '#000', // Black text for light mode
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  agePicker: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#f2f2f2', // Lighter background for neumorphism
    color: '#000', // Black text for light mode
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  checkbox: {
    marginRight: 5,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#000', // Black text for light mode
  },
});
export default Search;
