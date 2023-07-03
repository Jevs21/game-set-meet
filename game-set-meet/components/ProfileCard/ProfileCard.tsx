import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { StyleSheet, Dimensions } from "react-native";
import { MonoText, MonoTextHeader } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import { View, Card } from "../Themed";
import ProfileCardChipList from "./ProfileCardChipList";


interface ProfileCardProps {
  data: UserData | TeamData;
}

const ProfileCard = ({data}: ProfileCardProps) => {
  const { height } = Dimensions.get('window');  // Add this line

  const sendConnectionRequest = (data: UserData | TeamData) => {
    console.log("Sending connection request to " + data.name);
  }
  
  const generateMemberStr = (members: UserData[]): string => {
    let str = "Members:";
    for (let i = 0; i < members.length; i++) {
      str += members[i].name;
      if (i < members.length - 2) {
        str += ", ";
      } else if (i == members.length - 2) {
        str += " and ";
      }
    }
    return str;
  }

  // Get data data from global store
  const store = useSelector((state: RootState) => state.userData); 
  return (
    <View style={{flex: 1, height: height}}>
      <Card>
        {/* <Card> */}
        <View style={styles.header}>
          <View style={{flex: 1 }}>
            <Avatar rounded source={{ uri: data.imgUrl }} size="large" />
          </View>
          <View style={{flex: 3, justifyContent: 'flex-start', paddingLeft: 10}}>
            <MonoTextHeader>{data.name}</MonoTextHeader>
            <View style={styles.pronounView}>
              {'pronouns' in data && (
                <>
                  <MonoText style={styles.subtitle}>{data.pronouns}</MonoText>
                  <MonoText style={styles.subtitle}>  •  </MonoText>
                </>
              )}
              <MonoText style={styles.subtitle}>{data.distance} km away.</MonoText>
            </View>
            <MonoText style={styles.subtitle}>{data.mutualAvailabilityStr}</MonoText>

          </View>
        </View>
        
        {'members' in data && (
          <View style={{ marginVertical: 5 }}>
            <MonoText style={{lineHeight: 24}}>{generateMemberStr(data.members)}</MonoText>
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
        {/* </Card> */}
      </Card>
    </View>
    
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pronounView: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 5
  },
  subtitle: {
    opacity: 0.8,
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
