import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { Text, StyleSheet, Dimensions, Platform } from "react-native";
import { BaseText, MonoText, MonoTextHeader } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import ProfileCardAvailability from "./ProfileCardAvailability";
import ProfileCardSportsList from "./ProfileCardSportsList";
import ProfileCardCourtsList from "./ProfileCardCourtsList";
import { View, Card, Separator } from "../Themed";



interface ProfileCardProps {
  user: UserData;
}

const ProfileCard = ({user}: ProfileCardProps) => {
  // Get user data from global store
  const store = useSelector((state: RootState) => state.userData); 
  return (
    <Card>
      {/* <Card> */}
      <View style={styles.header}>
        <Avatar rounded source={{ uri: user.imgUrl }} size="large" />
        <MonoTextHeader>{user.name}</MonoTextHeader>
        <Text style={styles.pronouns}>{user.pronouns}</Text>
      </View>

      <View style={{ marginVertical: 20, marginHorizontal: 5 }}>
        <MonoText>{user.bio}</MonoText>
      </View>

      <Separator />

      <View style={styles.subview}>
        <ProfileCardSportsList sports={user.sports}/>
        <ProfileCardCourtsList courts={user.courts}/>
      </View>
      
      <ProfileCardAvailability availability={user.availability} /> 
      <Button title="Play" buttonStyle={styles.playButton} />
      {/* </Card> */}
    </Card>
    
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pronouns: {
    fontSize: 14,
    color: 'gray',
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  subview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  playButton: {
    backgroundColor: '#4B9CD3',
  },
});

export default ProfileCard;
