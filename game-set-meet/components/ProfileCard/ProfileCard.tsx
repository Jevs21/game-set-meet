import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { View, Text, StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import ProfileCardAvailability from "./ProfileCardAvailability";
import ProfileCardSportsList from "./ProfileCardSportsList";

const ProfileCard = () => {
  // Get user data from global store
  const store = useSelector((state: RootState) => state.userData);

  return (
    store.userData &&
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar rounded source={{ uri: store.userData?.imgUrl }} size="large" />
          <MonoText>{store.userData?.name}</MonoText>
          {/* Assuming the pronouns are stored in the store.userData.pronouns */}
          <Text style={styles.pronouns}>He/Him</Text>
        </View>

        <Text style={styles.bio}>{store.userData?.bio}</Text>

        <View style={styles.subview}>
          <ProfileCardSportsList sports={store.userData.sports}/>
          <View>
            <MonoText>Courts:</MonoText>
            {store.userData?.courts.map((court) => (
              <MonoText key={court.id}>{court.name}</MonoText>
            ))}
          </View>
        </View>
        { store.userData && <ProfileCardAvailability availability={store.userData.availability} /> }
        <Button title="Play" buttonStyle={styles.playButton} />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: '90%',
    padding: 15,
    // backgroundColor: '#FFF',
    borderRadius: 5,
    // Handle light and dark mode
    backgroundColor: '#1E1E1E',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
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
