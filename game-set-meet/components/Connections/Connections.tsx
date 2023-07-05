import { Animated, Dimensions, FlatList, ScrollView, StyleSheet } from "react-native";
import { SearchBar, Separator, View } from "../Themed";
import ConnectionListItem from "./ConnectionListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { useEffect, useRef, useState } from "react";

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


  const [search, setSearch] = useState('');
  const scrollA = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} />
      
      <FlatList
        style={{ width: width }}
        data={loggedUserData?.connections || []}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: false }
        )}
        // bounces={false}
        renderItem={({ item }) => <ConnectionListItem connection={item} />}
        keyExtractor={(item, index) => item.id || index.toString()}
        ItemSeparatorComponent={() => <Separator style={{marginVertical: 0}} />}
      />
        
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