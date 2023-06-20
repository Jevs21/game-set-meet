import { useRef, useState } from 'react';
import { Animated, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MonoText } from "../StyledText";
import { Icon, View } from "../Themed";
import Colors from '../../constants/Colors';
import ProfileCardChipList from '../ProfileCard/ProfileCardChipList';

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
            <ProfileCardChipList type="sport" list={user?.sports || null}/>
            <ProfileCardChipList type="court" list={user?.courts || null}/>
          </View>
        </ScrollView>
      </Animated.View>

      <TouchableOpacity style={{ height: 30, width: '100%' }} onPress={toggleView}>
        <View 
          lightColor={Colors.light.cardBackground} 
          darkColor={Colors.dark.cardBackground}
          style={styles.toggleButton}>
          <MonoText>{isExpanded ? 'Hide Mutual Details' : 'Show Mutual Details'}</MonoText>
          <Icon name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={16} />

        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatUserSummary;
