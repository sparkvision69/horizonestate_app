import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello, I am interested in the property you listed.', sender: 'other' },
    { id: '2', text: 'Hi! I’m Mahesh, how can I help you with the property?', sender: 'self' },
    { id: '3', text: 'Could you provide more details about the location and price?', sender: 'other' },
    { id: '4', text: 'Sure! The property is located in downtown, with a price of $350,000. Would you like to schedule a visit?', sender: 'self' },
    { id: '5', text: 'Sounds good! Can I visit tomorrow morning?', sender: 'other' },
    { id: '6', text: 'Tomorrow works! I’ll schedule the visit for 10 AM.', sender: 'self' },
    { id: '7', text: 'Perfect, see you then!', sender: 'other' },
    { id: '8', text: 'Looking forward to it! Have a great day!', sender: 'self' },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: `${messages.length + 1}`, text: message, sender: 'self' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ChatHeader />
      
      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.sender === 'self' ? styles.selfMessage : styles.otherMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageList}
      />
      
      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChatHeader = () => (
  <View style={styles.header}>
    <View style={styles.leftSection}>
      <Image source={require('../../../assets/profile.png')} style={styles.profileImage} />
      <View style={styles.chatInfo}>
        <Text style={styles.chatTitle}>Mahesh Bhatiya</Text>
        <Text style={styles.status}>Online</Text>
      </View>
    </View>
    <View style={styles.rightSection}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="call" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="videocam" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="settings" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 15,
  },
  chatInfo: {
    flexDirection: 'column',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#00BFFF',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    padding: 10,
  },
  messageList: {
    paddingBottom: 80,
    padding: 5
  },
  selfMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatScreen;
