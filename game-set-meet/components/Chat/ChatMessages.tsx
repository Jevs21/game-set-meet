import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { MonoText } from "../StyledText";
import { Separator, View } from "../Themed";

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
    <View style={{flex: 1}}>
      <FlatList
        data={messages}
        style={{ width: '100%' }}
        renderItem={({ item }) => {
          return (
            <MonoText>{item.content}</MonoText>
          )
        }}
        keyExtractor={(item, index) => item.id || index.toString()}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

export default ChatMessages;