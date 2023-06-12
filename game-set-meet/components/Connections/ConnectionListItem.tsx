import { ListItem, Avatar, Icon } from "react-native-elements";
import { View } from "../Themed";
import { MonoTextSubHeader } from "../StyledText";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

interface ConnectionListItemProps {
  user: UserData;
}

const ConnectionListItem = (props: ConnectionListItemProps) => {
  const { user } = props;
  return (
    <TouchableOpacity>
      <Link href={{ pathname: '/chat', params: {
        userJson: JSON.stringify(user)
      }}}>
        <View style={{
          flex: 1, flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          maxHeight: 50,
        }}>
          <Link href={{ pathname: '/modal', params: { 
            type: 'user', 
            userJson: JSON.stringify(user) 
            } 
          }}>
            <Avatar rounded size={'medium'} source={{ uri: user.imgUrl }} />
          </Link>
          <View>
            <MonoTextSubHeader>{user.name}</MonoTextSubHeader>
          </View>
          <Icon name='chevron-right' type='font-awesome' size={20} />
        </View>
      </Link>
    </TouchableOpacity>
  );
}

export default ConnectionListItem;
