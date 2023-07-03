import { Avatar } from "react-native-elements";
import { View } from "../Themed";

interface AvatarStackProps {
  users: UserData[];
}

const AvatarStack = ({ users }: AvatarStackProps) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {users.map((user) => (
        <Avatar
          key={user.id}
          rounded
          source={{ uri: user.imgUrl }}
          size="large"
          containerStyle={{ marginLeft: (users.length > 1) ? -10 : 0 }}
        />
      ))}
    </View>
  );
}

export default AvatarStack;