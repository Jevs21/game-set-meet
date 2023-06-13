import { Button, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Separator, Text, View } from '../../components/Themed';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { generateUsersData } from '../../global/testDataGenerator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function TabOneScreen() {
  const testUserList = generateUsersData();
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch feed from store
    dispatch({ type: 'feedData/fetchFeed' });
  }, []);
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
