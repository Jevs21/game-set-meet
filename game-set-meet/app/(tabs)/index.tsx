import { Button, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Separator, Text, View } from '../../components/Themed';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import generateTestUserData from '../../global/testDataGenerator';

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
  // const testUserList = [ 
  //   generateTestUserData(),
  //   generateTestUserData(),

  // ];
  // Refactor above
  const testUserList = [];
  for (let i = 0; i < 10; i++) {
    testUserList.push(generateTestUserData());
  }
  


  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={testUserList}
        renderItem={({ item }) => <ProfileCard user={item} />}
        keyExtractor={(item, index) => item.id || index.toString()}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
});
