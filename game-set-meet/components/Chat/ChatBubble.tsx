import { StyleSheet, useColorScheme } from "react-native";
import { MonoText } from "../StyledText";
import { View } from "../Themed";
import { useTheme } from "react-native-elements";

interface ChatBubbleProps {
  index: number;
  left: boolean;
  message: MessageData;
}

const ChatBubble = ({ index, left, message }: ChatBubbleProps) => {
  const scheme = useColorScheme();

  const styles = StyleSheet.create({
    chatBubble: {
      backgroundColor: (left ? '#222' : '#224499'),
      padding: 10,
      borderRadius: 20,
      marginVertical: 5,
      marginHorizontal: 20,
      maxWidth: '80%',
    },
    chatBubbleLeft: {
      alignSelf: 'flex-start',
    },
    chatBubbleRight: {
      alignSelf: 'flex-end',
    },
  });

  return (
    <View key={message.id} style={[styles.chatBubble, left ? styles.chatBubbleLeft : styles.chatBubbleRight]}>
      <MonoText>{message.content}</MonoText>
    </View>
  );
}



export default ChatBubble;