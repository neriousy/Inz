const xd = {"acceptsPets": 0, "acceptsSmoking": 0, "characterType": 3, "conciliatory": 3, "cooking": 3, "drinks": 0, "hasPets": 0, "invitingFriends": 3, "isStudent": 0,"likesPets": 1, "livesIn": "Warszawa", "preferedGender": "O", "sleepTime": 3, "smokes": 0, "talkativity": 3, 
"timeSpentOutsideHome": 3, "works": 0};

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import NavHeader from '../../components/NavHeader/NavHeader';



const Characteristics = () => {
  const [characteristics, setCharacteristics] = useState({
    "acceptsPets": 0,
    "acceptsSmoking": 0,
    "characterType": 3,
    "conciliatory": 3,
    "cooking": 3,
    "drinks": 0,
    "hasPets": 0,
    "invitingFriends": 3,
    "isStudent": 0,
    "likesPets": 1,
    // "livesIn": "Warszawa",
    // "preferedGender": "O",
    "sleepTime": 3,
    "smokes": 0,
    "talkativity": 3,
    "timeSpentOutsideHome": 3,
    "works": 0
  });

  console.log(characteristics)

  const handleSliderChange = (key, value) => {
    setCharacteristics(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  return (
    <View>
      {Object.entries(characteristics).map(([key, value]) => (
        <View key={key}>
          <Text>{key}</Text>
          <Slider
            
            minimumValue={1}
            maximumValue={5}
            step={1}
            increment={1}
            value={value}
            onValueChange={newValue => handleSliderChange(key, newValue)}
          />
        </View>
      ))}
    </View>
  );
};

export default Characteristics;
