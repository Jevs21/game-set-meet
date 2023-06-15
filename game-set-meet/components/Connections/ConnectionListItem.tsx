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
      {/* <Link href={{ pathname: '/chat', params: {
        userJson: JSON.stringify(user)
      }}} style={{
        flex: 1,
      }}> */}
        <View style={{
          flex: 1, 
          flexDirection: 'row', 
          alignItems: 'center',
          // justifyContent: 'center',
          padding: 2,
          paddingHorizontal: 20,
          maxHeight: 80,
        }}>
          
          <Avatar rounded size={'medium'} source={{ uri: user.imgUrl }} />
          <View style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%', 
          }}>
            <MonoTextSubHeader>{name}</MonoTextSubHeader>
            <MonoText>{lastMessage}</MonoText>
          </View>
          <Icon name={'keyboard-arrow-right'} size={20} /> 
        </View>
      {/* </Link> */}
    </TouchableOpacity>
  );
}

export default ConnectionListItem;
