import { Avatar } from "react-native-elements";
import { View } from "./Themed";

interface AvatarStackProps {
  type: 'profile' | 'connection';
  imgUrls: string[];
}

const AvatarStack = ({ type, imgUrls }: AvatarStackProps) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {imgUrls.map((url, index) => (
        <Avatar
          key={index}
          rounded
          source={{ uri: url }}
          size="large"
          containerStyle={{ 
            marginLeft: (imgUrls.length > 1) ? 
              (type === 'profile') ? -10 : -30 : 0 }}
        />
      ))}
    </View>
  );
}

export default AvatarStack;