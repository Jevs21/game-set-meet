import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {  View } from "../Themed";
import { Dimensions, FlatList, ScrollView, StyleSheet } from "react-native";
import { generateUsersData } from "../../global/testDataGenerator";
import ProfileCard from "../ProfileCard/ProfileCard";
import TopUtilityContainer from "../TopUtilityContainer";
import FeedButtonGroup from "./FeedButtonGroup";
import ProfileSettings from "../Settings/ProfileSettings";
import { MonoTextSubHeader } from "../StyledText";
import DoubleButtonGroup from "../DoubleButtonGroup";

const Feed = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userList, setUserList] = useState<UserData[]>([]);
  const scrollRef = useRef<ScrollView | null>(null); // Reference to ScrollView
  const { height, width } = Dimensions.get('window'); 
  useEffect(() => {
    // Fetch feed from store
    const feedData = generateUsersData();
    // const feedData: UserData[] | null = useSelector((state: RootState) => state.feedData.feedData);
    setUserList((feedData) ? feedData : []);
  }, []);

  // const fadeAnim1 = useRef(new Animated.Value(selectedIndex === 0 ? 1 : 0)).current;
  // const fadeAnim2 = useRef(new Animated.Value(selectedIndex === 1 ? 1 : 0)).current;

  

  useEffect(() => {
    scrollRef.current?.scrollTo({x: selectedIndex * width, animated: true});
  }, [selectedIndex, width]);

  return (
    <View style={styles.container}>
      <TopUtilityContainer>
        <DoubleButtonGroup
          selected={selectedIndex}
          setSelected={setSelectedIndex}
          titles={['Individuals', 'Teams']}
        />
      </TopUtilityContainer>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ width }}

        onScrollEndDrag={(e) => {
          // Get direction of swipe
          const dx = e.nativeEvent.contentOffset.x;
          const direction = dx > selectedIndex * width ? 1 : 0;
          
          setSelectedIndex(direction);
        }}
      >
        <FlatList
          style={{ width: width }}
          data={userList}
          renderItem={({ item }) => <ProfileCard user={item} />}
          keyExtractor={(item, index) => item.id || index.toString()}
          // ItemSeparatorComponent={() => <Separator />}
          snapToInterval={height} // Add this line
          decelerationRate="fast" // Add this line
        />
        <View style={{ width, height }}> 
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <MonoTextSubHeader>Coming soon!</MonoTextSubHeader>
          </View>
        </View>
      </ScrollView>

      
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