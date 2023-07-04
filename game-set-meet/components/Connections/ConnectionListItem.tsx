import { Icon, View } from "../Themed";
import { MonoText, MonoTextSubHeader } from "../StyledText";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AvatarStack from "../AvatarStack";

interface ConnectionListItemProps {
  connection: ConnectionData;
}

const ConnectionListItem = ({connection}: ConnectionListItemProps) => {

  const lastMessage = "asdf";
  const { push } = useRouter(); // use the hook to get the push function

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        // Navigate to the chat screen with parameters
        push({
          pathname: '/chat', 
          params: {
            userJson: JSON.stringify(connection.toId)
          },
        });
      }}
    >
      <View style={{
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 2,
        paddingHorizontal: 20,
        // maxHeight: 80,
        height: 80
      }}>
        
        <AvatarStack type={'connection'} imgUrls={connection.imgUrls} />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: '100%', 
          paddingHorizontal: 10,
        }}>
          <MonoTextSubHeader style={{paddingVertical: 4}}>{connection.name}</MonoTextSubHeader>
          <MonoText>{connection.lastMessage.content}</MonoText>
        </View>
        <Icon name={'keyboard-arrow-right'} size={20} /> 
      </View>
    </TouchableOpacity>
  );
}

export default ConnectionListItem;
