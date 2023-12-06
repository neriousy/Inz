import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const ChatRoom = ({ navigation, route}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const { user } = route.params;

  console.log(user);


  const handleSend = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  const renderMessage = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Room with {user.name}</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messages}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here"
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  messages: {
    flex: 1,
    width: '100%',
  },
  messageContainer: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  message: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default ChatRoom;
