import { FlatList, StyleSheet } from "react-native";
import { generateUsersData } from "../../global/testDataGenerator";
import { Separator, View } from "../Themed";
import ConnectionListItem from "./ConnectionListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";

const Connections = () => {
  // Get user data from store
  const loggedUserData = useSelector((state: RootState) => state.userData.userData);
  if (loggedUserData) {
    console.log(loggedUserData.connections);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={loggedUserData?.connections || []}
        // bounces={false}
        renderItem={({ item }) => <ConnectionListItem users={item.connectionUsers} />}
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