import { View, useColorScheme } from "react-native";
import AvatarStack from "../AvatarStack";
import { MonoTextSubHeader } from "../StyledText";
import Colors from "../../constants/Colors";
import { Icon, Separator } from "../Themed";

interface ChatHeaderProps {
  conn: ConnectionData;
}

const ChatHeader = ({conn}: ChatHeaderProps) => {
  const colorScheme = useColorScheme();
  const headerStyle = {
    backgroundColor: Colors[colorScheme ?? 'light'].background,
    paddingTop: 30,
    // shadowColor: 'transparent',
  };
  return (
    <View style={{ height: 160, ...headerStyle }}>

      <View style={{height: 120, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, alignItems: 'flex-start'}} >
          <Icon name={'keyboard-arrow-left'} size={30} />
        </View>

        <View style={{flex: 1, alignItems: 'center'}} >
          <AvatarStack type={'connection'} imgUrls={[conn.imgUrl]} />
          <MonoTextSubHeader style={{paddingTop: 10}}>{conn.name}</MonoTextSubHeader>
        </View>

        <View style={{flex: 1}} />
      </View>
      <Separator />
    </View>
  );
};

export default ChatHeader;
