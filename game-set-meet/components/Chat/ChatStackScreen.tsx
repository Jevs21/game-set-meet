import { Stack } from "expo-router";

const ChatStackScreen = () => {
  return (
    <Stack.Screen name="chat" options={{
      title: 'Chat',
      // headerRight
    }} />
  );
};

export default ChatStackScreen;