import { Link, useGlobalSearchParams, useNavigation } from "expo-router";
import { BaseText, MonoText, MonoTextSubHeader } from "../StyledText";
import { View } from "../Themed";
import { useLayoutEffect, useState } from "react";
import InfoIcon from "../Modal/InfoIcon";
import ChatUserSummary from "./ChatUserSummary";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Avatar } from "react-native-elements";

const Chat = () => {
  const [user, setUser] = useState<UserData | null>(null); // [1
  const { userJson } = useGlobalSearchParams<{
    userJson: string
  }>();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    let user: UserData = JSON.parse(userJson || '{}');
    console.log(user);
    if (!user) {
      setUser(null);
      return;
    }

    navigation.setOptions({ 
      // title: `${user.name}`,
      headerRight: () => <InfoIcon/>,
      headerTitle: () => (
        <Link href={{ pathname: '/modal', params: { 
          type: 'user', 
          userJson: JSON.stringify(user) 
          } 
        }}>
          <BaseText>{user.name}</BaseText>
        </Link>
      )
    });
    setUser(user);
  }, [navigation, userJson]);
  
  return (
    <View style={{flex: 1}}>
      <ChatUserSummary user={user} />
      <KeyboardAwareScrollView 
        style={{flex: 1}}
        contentContainerStyle={{flex: 1}} 
        extraScrollHeight={20}>
        <View style={{flex: 1, flexGrow: 1}}>

          <ChatMessages />
        </View>
        <ChatInput />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Chat;
