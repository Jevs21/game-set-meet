import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useGlobalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import Map from '../components/LocationModal/Map';

export default function ModalScreen() {
  const { type, courtJson, sportJson } = useGlobalSearchParams<{
    type: string,
    courtJson: string,
    sportJson: string
  }>();
  const navigation = useNavigation();
  const court = JSON.parse(courtJson || '{}');
  const sport = JSON.parse(sportJson || '{}');

  useLayoutEffect(() => {
    const title = type === 'location' ? court.name : 'Sport';
    navigation.setOptions({ title: title });
  }, [navigation, type]);
  
  return (
    <View style={styles.container}>
      {(type === 'location' && court) && (
        <Map lat={court.lat} lng={court.lng} />
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
