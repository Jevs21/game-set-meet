import { FlatList, StyleSheet } from "react-native";
import generateTestUserData from "../../global/testDataGenerator";
import { Separator, View } from "../Themed";
import ConnectionListItem from "./ConnectionListItem";

const Connections = () => {
  const testUserList = [];
  for (let i = 0; i < 10; i++) {
    testUserList.push(generateTestUserData());
  }
  


  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={testUserList}
        bounces={false}
        renderItem={({ item }) => <ConnectionListItem user={item} />}
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