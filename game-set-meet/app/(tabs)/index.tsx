import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

export default function TabOneScreen() {
  // const addDocument = async () => {
  //   try {
  //     await addDoc(collection(db, 'test'), {
  //       name: 'Test Document',
  //     });
  //     console.log('Document added!');
  //   } catch (error) {
  //     console.error('Error adding document: ', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/* <Button title="Add Document" onPress={addDocument} /> */}
      <ProfileCard />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
