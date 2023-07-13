import { useGlobalSearchParams, useNavigation } from "expo-router";
import { View } from "../Themed";
import React, { useLayoutEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderIconButton from "../HeaderIconButton";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  const [conn, setConn] = useState<ConnectionData | null>(null); // [1
  const { connectionJson } = useGlobalSearchParams<{
    connectionJson: string,
  }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const conn: ConnectionData = JSON.parse(connectionJson || '{}');
    console.log(conn);
    if (!conn) {
      setConn(null);
      return;
    }

    navigation.setOptions({ 
      headerRight: () => <HeaderIconButton href={`/modal?type=conn&connJson=${JSON.stringify(conn)}`} name={'edit'} />,
      header : () => <ChatHeader conn={conn} />,
      // headerTitle: () => (
        
      //   // <Link href={{ pathname: '/modal', params: { 
      //   //   type: 'conn', 
      //   //   connJson: JSON.stringify(conn) 
      //   //   } 
      //   // }}>
      //   //   <MonoTextSubHeader>{conn.name}</MonoTextSubHeader>
      //   // </Link>
      // ),
      // headerStyle: { height: 300 },
    });

    setConn(conn);
  }, [navigation, connectionJson]);
  
  return (
    <View style={{flex: 1}}>
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
