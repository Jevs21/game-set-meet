import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { Text, StyleSheet, Dimensions, Platform } from "react-native";
import { BaseText, MonoText, MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { Avatar, Button } from "react-native-elements";
import ProfileCardAvailability from "./ProfileCardAvailability";
import { View, Card, Separator, useThemeColor } from "../Themed";
import { useState } from "react";
import ProfileCardChipList from "./ProfileCardChipList";


interface ProfileCardProps {
  user: UserData;
}

const ProfileCard = ({user}: ProfileCardProps) => {
  const [hasMatchSent, setHasMatchSent] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { height } = Dimensions.get('window');  // Add this line
  const playUser = (user: UserData) => {
    setHasMatchSent(true);
    console.log("Playing user: " + user.name);
  }
  const hideButtonColor = useThemeColor({}, 'background');

  // Get user data from global store
  const store = useSelector((state: RootState) => state.userData); 
  return (
    <View style={{flex: 1, height: height}}>
      <Card>
        {/* <Card> */}
        <View style={styles.header}>
          <View style={{flex: 1 }}>
            <Avatar rounded source={{ uri: user.imgUrl }} size="large" />
          </View>
          <View style={{flex: 3, justifyContent: 'flex-start', paddingLeft: 10}}>
            <MonoTextHeader>{user.name}</MonoTextHeader>
            <View style={styles.pronounView}>
              <MonoText style={styles.subtitle}>{user.pronouns}</MonoText>
              <MonoText style={styles.subtitle}>  •  </MonoText>
              <MonoText style={styles.subtitle}>{user.distance} km away.</MonoText>
            </View>
            <MonoText style={styles.subtitle}>{user.mutualAvailabilityStr}</MonoText>

          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <MonoText style={{lineHeight: 24}}>{user.bio}</MonoText>
        </View>

        <View style={styles.subview}>
          <ProfileCardChipList type="sport" list={user.sports}/>
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
            onPress={() => playUser(user)}
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
