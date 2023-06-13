import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { Separator, View } from "../Themed";
import ChatBubble from "./ChatBubble";

const ChatMessages = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const randString = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
    }
    return result;
  }

  const testMessage = (): MessageData => {
    return {
      id: randString(10),
      content: 'Hello',
      senderId: '1',
      receiverId: '2',
      timestamp: 123456789,
    }
  }
  useEffect(() => {
    let messages: MessageData[] = [];
    for (let i = 0; i < 10; i++) {
      messages.push(testMessage());
    }
    setMessages(messages);
  }, []);


  return (
    <View style={{flex: 1 }}>
      {messages.map((message, index) => {
        return (
          <ChatBubble key={index} index={index} left={index % 2 == 0} message={message}/>
        )
      })}
    </View>
  );
}

export default ChatMessages;