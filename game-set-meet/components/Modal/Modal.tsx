import { MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { View } from "../Themed";
import Map from "./Location/Map";
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import ProfileCard from "../ProfileCard/ProfileCard";

const Modal = () => {
  const { type, courtJson, sportJson, userJson } = useGlobalSearchParams<{
    type: string,
    courtJson: string,
    sportJson: string,
    userJson: string
  }>();
  const navigation = useNavigation();
  const court = JSON.parse(courtJson || '{}');
  const sport = JSON.parse(sportJson || '{}');
  const user = JSON.parse(userJson || '{}');

  useLayoutEffect(() => {
    let title = '';
    if (type === 'location') {
      title = court.name;
    } else if (type === 'sport') {
      title = sport.name;
    } else if (type === 'user') {
      title = user.name;
    } else {
      title = '?';
    }
    navigation.setOptions({ title: title });
  }, [navigation, type]);
  
  return (
    <View style={styles.container}>
      {(type === 'location' && court) && (
        <Map lat={court.lat} lng={court.lng} />
      )}
      {(type === 'sport' && sport) && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <MonoTextHeader>{sport.name}</MonoTextHeader> 
          <MonoTextSubHeader>{sport.skillLevel}</MonoTextSubHeader>
        </View>
      )}
      {(type === 'user' && user) && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ProfileCard user={user} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Modal;