import { ListItem, Avatar } from "react-native-elements";
import { Icon, View } from "../Themed";
import { MonoText, MonoTextSubHeader } from "../StyledText";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface ConnectionListItemProps {
  user: UserData;
}

const ConnectionListItem = (props: ConnectionListItemProps) => {
  const { user } = props;
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
          // query: {
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
            <MonoTextSubHeader>{user.name}</MonoTextSubHeader>
            <MonoText>{lastMessage}</MonoText>
          </View>
          <Icon name={'keyboard-arrow-right'} size={20} /> 
        </View>
      {/* </Link> */}
    </TouchableOpacity>
  );
}

export default ConnectionListItem;
