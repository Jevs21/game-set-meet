import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { StyleSheet, Dimensions } from "react-native";
import { MonoText, MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import { View, Card } from "../Themed";
import ProfileCardChipList from "./ProfileCardChipList";
import AvatarStack from "../AvatarStack";
import Colors from "../../constants/Colors";


interface ProfileCardProps {
  data: UserData | TeamData;
  // data: ProfileData;
}

const ProfileCard = ({data}: ProfileCardProps) => {
  const { height } = Dimensions.get('window');  // Add this line

  const sendConnectionRequest = (data: UserData | TeamData) => {
    console.log("Sending connection request to " + data.name);
  }

  // Get data data from global store
  const store = useSelector((state: RootState) => state.userData); 
  return (
    <View style={{height: height, marginVertical: 0}}>
      <Card>
        <View>
          <View style={styles.header}>
            <AvatarStack type={"profile"} imgUrls={[data.imgUrl]} />
            <MonoTextHeader style={styles.name}>{data.name}</MonoTextHeader>
            <View style={styles.pronounView}>
              {(!('memberIds' in data)) ? (
                <>
                  <MonoTextSubHeader style={styles.subtitle}>{data.pronouns}</MonoTextSubHeader>
                  <MonoTextSubHeader style={styles.subtitle}>  •  </MonoTextSubHeader>
                </>
              ) : (
                <>
                  <MonoTextSubHeader style={styles.subtitle}>{data.memberIds.length} members</MonoTextSubHeader>
                  <MonoTextSubHeader style={styles.subtitle}>  •  </MonoTextSubHeader>
                </>
              )}
              <MonoTextSubHeader style={styles.subtitle}>{data.distance} km away</MonoTextSubHeader>
            </View>
          </View>
          
          <View style={styles.content}>
            <MonoText style={styles.subtitle}>{data.mutualAvailabilityStr}</MonoText>

            {'memberNames' in data && (
              <View style={{ marginVertical: 5 }}>
                <MonoText style={{lineHeight: 24}}>{data.memberNames.join(',')}</MonoText>
              </View>
            )}

            <View style={{ marginVertical: 30 }}>
              <MonoText style={{lineHeight: 24}}>{data.bio}</MonoText>
            </View>

            <View style={styles.subview}>
              <ProfileCardChipList type="sport" list={data.sports}/>
            </View>
            
            <View style={[styles.subview, {paddingTop: 20}]}>
              <Button
                title="Hide"
                titleStyle={{color: "#302d2d", fontFamily: 'Gally'}}
                buttonStyle={[styles.button, {backgroundColor: "#D3D3D3"}]}
                containerStyle={{flex: 1}}
                onPress={() => console.log("Hide user")}
                />
              <Button 
                title="Connect" 
                titleStyle={{color: "#302d2d", fontFamily: 'Gally'}}
                buttonStyle={[styles.button, styles.playButton]} 
                containerStyle={{flex: 5}}
                onPress={() => sendConnectionRequest(data)}
                />
            </View>
          </View>
        </View>
        
            
      </Card>
    </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.light.chipBackground,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 30,
  },
  name: {
    textAlign: 'center',
    color: Colors.dark.text,
    paddingVertical: 10,
  },
  pronounView: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  subtitle: {
    opacity: 0.9,
    color: Colors.dark.text,
  },
  subview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: "#FBA673",
    height: 50,
    borderRadius: 6,
    width: "100%",
  },
  playButton: {
    // flex: 1,
    backgroundColor: "#FBA673",
    // width: "75%"
  },
});

export default ProfileCard;
