import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Chat = ({ navigation }) => {
  const [chats, setChats] = useState([
    {
      id: '1',
      name: 'John Doe',
      message: 'Hey, how are you?',
      time: '10:30 AM',
      online: true,
      image: null,
    },
    {
      id: '2',
      name: 'Jane Smith',
      message: 'Can you send me the report?',
      time: 'Yesterday',
      online: false,
      image: null,
    },
    {
      id: '3',
      name: 'Bob Johnson',
      message: 'See you later!',
      time: 'Yesterday',
      online: false,
      image: null,
    },
    {
      id: '4',
      name: 'Alice Brown',
      message: 'Thanks for the help!',
      time: '2:15 PM',
      online: true,
      image: null,
    },
  ]);

  const handleChatPress = (id) => {
    console.log(id);
    navigation.navigate('ChatRoom', { user: id });
  };

  const renderChat = ({ item }) => (
    <TouchableOpacity onPress={() => handleChatPress(item)} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      {item.image ? (
        <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25 }} />
      ) : (
        <Ionicons name="person-circle-outline" size={50} color="gray" />
      )}
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: 'gray' }}>{item.message}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: 'gray', fontSize: 12 }}>{item.time}</Text>
        {item.online && <View style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: 5, marginTop: 5 }} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={chats}
      renderItem={renderChat}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Chat;
