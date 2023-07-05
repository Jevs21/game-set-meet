import { ScrollView, StyleSheet } from 'react-native';

import ProfileSettings from '../../components/Settings/ProfileSettings';

export default function TabThreeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileSettings />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  }
});
