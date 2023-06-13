import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Separator, View } from "../Themed";
import { FlatList, StyleSheet } from "react-native";
import { generateUsersData } from "../../global/testDataGenerator";
import ProfileCard from "../ProfileCard/ProfileCard";
import { RootState } from "../../global/store";

const Feed = () => {
  const [userList, setUserList] = useState<UserData[]>([]);
  useEffect(() => {
    // Fetch feed from store
    const feedData = generateUsersData();
    // const feedData: UserData[] | null = useSelector((state: RootState) => state.feedData.feedData);
    setUserList((feedData) ? feedData : []);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={userList}
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

export default Feed;