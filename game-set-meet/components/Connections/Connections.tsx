import { Dimensions, FlatList, ScrollView, StyleSheet } from "react-native";
import { generateUsersData } from "../../global/testDataGenerator";
import { Separator, View } from "../Themed";
import ConnectionListItem from "./ConnectionListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import TopUtilityContainer from "../TopUtilityContainer";
import { useEffect, useRef, useState } from "react";
import DoubleButtonGroup from "../DoubleButtonGroup";
import { MonoTextSubHeader } from "../StyledText";

const Connections = () => {
  // Get user data from store
  const [selectedIndex, setSelectedIndex] = useState(0);
  const loggedUserData = useSelector((state: RootState) => state.userData.userData);
  if (loggedUserData) {
    console.log(loggedUserData.connections);
  }
  const scrollRef = useRef<ScrollView | null>(null); // Reference to ScrollView
  const { height, width } = Dimensions.get('window'); 

  useEffect(() => {
    scrollRef.current?.scrollTo({x: selectedIndex * width, animated: true});
  }, [selectedIndex, width]);

  return (
    <View style={styles.container}>
      <TopUtilityContainer>
        <DoubleButtonGroup
          selected={selectedIndex}
          setSelected={setSelectedIndex}
          titles={['Connections', 'My Teams']}
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
          data={loggedUserData?.connections || []}
          // bounces={false}
          renderItem={({ item }) => <ConnectionListItem users={item.connectionUsers} />}
          keyExtractor={(item, index) => item.id || index.toString()}
          ItemSeparatorComponent={() => <Separator style={{marginVertical: 0}} />}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Connections;