import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { Text, StyleSheet, Dimensions, Platform } from "react-native";
import { BaseText, MonoText, MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import ProfileCardAvailability from "./ProfileCardAvailability";
import { View, Card, Separator } from "../Themed";
import { useState } from "react";
import ProfileCardChipList from "./ProfileCardChipList";



interface ProfileCardProps {
  user: UserData;
}

const ProfileCard = ({user}: ProfileCardProps) => {
  const [hasMatchSent, setHasMatchSent] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const playUser = (user: UserData) => {
    setHasMatchSent(true);
    console.log("Playing user: " + user.name);
  }
  // Get user data from global store
  const store = useSelector((state: RootState) => state.userData); 
  return (
    <Card>
      {/* <Card> */}
      <View style={styles.header}>
        <Avatar rounded source={{ uri: user.imgUrl }} size="large" />
        <MonoTextHeader style={{marginTop: 10}}>{user.name}</MonoTextHeader>
        <MonoText style={styles.pronouns}>{user.pronouns}</MonoText>
      </View>

      <View style={{ marginVertical: 10 }}>
        <MonoTextSubHeader>{user.bio}</MonoTextSubHeader>
      </View>

      <Separator />

      <View style={styles.subview}>
        <ProfileCardChipList type="sport" list={user.sports}/>
        <ProfileCardChipList type="court" list={user.courts}/>
      </View>
      
      <ProfileCardAvailability availability={user.availability} /> 
      { hasMatchSent ? (
        <Text>Match sent!</Text> 
      ): (
        <Button title="Play" buttonStyle={styles.playButton} onPress={() => playUser(user)}/>
      )}
      {/* </Card> */}
    </Card>
    
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pronouns: {
    opacity: 0.8,
  },
  subview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  playButton: {
    backgroundColor: '#4B9CD3',
  },
});

export default ProfileCard;
