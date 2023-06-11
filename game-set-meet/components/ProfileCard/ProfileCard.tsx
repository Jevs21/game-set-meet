import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { Text, StyleSheet } from "react-native";
import { BaseText, MonoText } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import ProfileCardAvailability from "./ProfileCardAvailability";
import ProfileCardSportsList from "./ProfileCardSportsList";
import ProfileCardCourtsList from "./ProfileCardCourtsList";
import { View, Card } from "../Themed";



interface ProfileCardProps {
  user: UserData;
}

const ProfileCard = ({user}: ProfileCardProps) => {
  // Get user data from global store
  const store = useSelector((state: RootState) => state.userData);

  return (
    <Card style={styles.container}>
      {/* <Card> */}
      <View style={styles.header}>
        <Avatar rounded source={{ uri: user.imgUrl }} size="large" />
        <MonoText>{user.name}</MonoText>
        {/* Assuming the pronouns are stored in the user.pronouns */}
        <Text style={styles.pronouns}>{user.pronouns}</Text>
      </View>

      <BaseText>{user.bio}</BaseText>

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
  container: {
    flex: 1,
    flexGrow: 1,
    padding: 15,
    marginTop: 10,
    marginHorizontal: 20,
    // backgroundColor: '#FFF',
    borderRadius: 10,
    // Handle light and dark mode
    // backgroundColor: '#1E1E1E',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.3,
    // shadowRadius: 1,
    // elevation: 2,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
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
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#4B9CD3',
  },
});

export default ProfileCard;
