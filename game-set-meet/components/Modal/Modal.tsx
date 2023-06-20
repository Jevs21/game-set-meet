import { MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { View } from "../Themed";
import Map from "./Location/Map";
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useMemo } from "react";
import { StyleSheet } from "react-native";
import ProfileCard from "../ProfileCard/ProfileCard";
import ModalSport from "./ModalSport";
import ModalAddSport from "./ModalAddSport";

const Modal = () => {
  const VALID_TYPES = ['location', 'sport', 'user', 'add_location', 'add_sport'];
  const { type, dataJson } = useGlobalSearchParams<{
    type: string,
    dataJson: string,
  }>();

  const navigation = useNavigation();

  const data = useMemo(() => {
    if (type && !VALID_TYPES.includes(type)) {
      console.log(`Invalid type in Modal.tsx ${type}`);
      return null;
    }

    if (type === 'location') {
      return JSON.parse(dataJson || '{}') as CourtData;
    } else if (type === 'sport') {
      return JSON.parse(dataJson || '{}') as SportData;
    } else if (type === 'user') {
      return JSON.parse(dataJson || '{}') as UserData;
    } 
    return null;
  }, [type, dataJson]);

  useLayoutEffect(() => {
    if (data && 'name' in data) {
      navigation.setOptions({ title: data.name });
    } else {
      navigation.setOptions({ title: 'Modal ?' });
    }
  }, [navigation, type]);
  
  return (
    <View style={styles.container}>
      {type === 'location' && (
        <Map lat={(data as CourtData).lat} lng={(data as CourtData).lng} />
      )}
      {type === 'sport' && <ModalSport sport={data as SportData} /> }
      {type === 'user' && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ProfileCard user={data as UserData} />
        </View>
      )}
      {type === 'add_location' && <></>}
      {type === 'add_sport' && <ModalAddSport />}
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