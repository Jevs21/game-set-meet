// import { Avatar } from "react-native-elements";
// import { MonoText } from "../StyledText";
// import { View } from "../Themed";

// interface ChatUserSummaryProps {
//   user: UserData | null;
// }

// const ChatUserSummary = ({user}: ChatUserSummaryProps) => {
//   return (
//     <View style={{flex: 1, flexGrow: 1}}>
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{flex: 1}}>
//           <Avatar rounded size={'medium'} source={{ uri: user?.imgUrl }} />
//           <MonoText>{user?.pronouns}</MonoText>
//         </View>
//         <View style={{flex: 1}}>
//           <MonoText>{user?.name}</MonoText>
//           <MonoText>one </MonoText>
//           <MonoText>two </MonoText>
//           <MonoText>three </MonoText>
//         </View>
//       </View>

//       <View style={{ height: 50, width: '100%' }}>
//         <View style={{flex: 1, flexDirection: 'row'}}>
//           <MonoText>Expand</MonoText>
//         </View>
//       </View>
//     </View>
//   );
// };


// export default ChatUserSummary;

import React, { useRef, useState } from 'react';
import { Animated, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from "react-native-elements";
import { MonoText, MonoTextSubHeader } from "../StyledText";
import { View } from "../Themed";
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

interface ChatUserSummaryProps {
  user: UserData | null;
}

const ChatUserSummary = ({user}: ChatUserSummaryProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const animation = useRef(new Animated.Value(1)).current;

  const toggleView = () => {
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // adjust these values according to your needs
  });

  return (
    <View>
      <Animated.View style={{height: heightInterpolation, overflow: 'hidden'}}>
        <ScrollView>
          <View style={{
            flex: 1, 
            flexDirection: 'row', 
            height: 200,
            alignItems: 'center'
          }}>
            <View style={{flex: 1}}>
              <Avatar rounded size={'large'} source={{ uri: user?.imgUrl }} />
              <MonoText>{user?.pronouns}</MonoText>
            </View>
            <View style={{flex: 1}}>
              <MonoText>{user?.name}</MonoText>
              <MonoText>one </MonoText>
              <MonoText>two </MonoText>
              <MonoText>three </MonoText>
            </View>
          </View>
        </ScrollView>
      </Animated.View>

      <TouchableOpacity style={{ height: 40, width: '100%' }} onPress={toggleView}>
        <View 
          lightColor={Colors.light.cardBackground} 
          darkColor={Colors.dark.cardBackground}
          style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          {/* <MonoText>{isExpanded ? 'Hide Profile' : 'Show Profile'}</MonoText> */}
          <FontAwesome name={isExpanded ? 'chevron-up' : 'chevron-down'} size={16} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatUserSummary;
