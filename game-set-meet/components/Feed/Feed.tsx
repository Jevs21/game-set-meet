import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {  View } from "../Themed";
import { Dimensions, FlatList, ScrollView, StyleSheet } from "react-native";
import { generateTeamList, generateUsersData } from "../../global/testDataGenerator";
import ProfileCard from "../ProfileCard/ProfileCard";

const Feed = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userList, setUserList] = useState<UserData[]>([]);
  const [teamList, setTeamList] = useState<TeamData[]>([]);
  const scrollRef = useRef<ScrollView | null>(null); // Reference to ScrollView
  const { height, width } = Dimensions.get('window'); 
  // const [cardHeight, setCardHeight] = useState(0); // Add this line
  useEffect(() => {
    // Fetch feed from store
    const feedData = generateUsersData();
    const teamData = generateTeamList();
    // const feedData: UserData[] | null = useSelector((state: RootState) => state.feedData.feedData);
    setUserList((feedData) ? feedData : []);
    setTeamList((teamData) ? teamData : []);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({x: selectedIndex * width, animated: true});
  }, [selectedIndex, width]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: width }}
        data={userList}
        renderItem={({ item }) => <ProfileCard data={item} />}
        keyExtractor={(item, index) => item.id || index.toString()}
        // ItemSeparatorComponent={() => <Separator />}
        snapToInterval={height} // Add this line
        decelerationRate="fast" // Add this line
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
  }
});

export default Feed;