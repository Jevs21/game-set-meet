import { ListItem, Avatar } from "react-native-elements";
import { Icon, View } from "../Themed";
import { MonoText, MonoTextSubHeader } from "../StyledText";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useMemo } from "react";

interface ConnectionListItemProps {
  users: UserData[];
}

const ConnectionListItem = (props: ConnectionListItemProps) => {
  const { users } = props;
  const user = users[0];
  const lastMessage = "asdf";
  const { push } = useRouter(); // use the hook to get the push function

  const name = useMemo(() => {
    return users.map((user) => {
      return (user.name.includes(' ')) ? user.name.split(' ')[0] : user.name;
    }).join(', ');
  }, [users]);

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        // Navigate to the chat screen with parameters
        push({
          pathname: '/chat', 
          params: {
            userJson: JSON.stringify(user)
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
        
        <Avatar rounded size={'medium'} source={{ uri: user.imgUrl }} />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: '100%', 
          paddingHorizontal: 10,
        }}>
          <MonoTextSubHeader style={{paddingVertical: 4}}>{name}</MonoTextSubHeader>
          <MonoText>{lastMessage}</MonoText>
        </View>
        <Icon name={'keyboard-arrow-right'} size={20} /> 
      </View>
    </TouchableOpacity>
  );
}

export default ConnectionListItem;
