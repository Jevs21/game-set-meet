import { View, StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { Icon } from "react-native-elements";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

interface SportChipProps {
  sport: SportData;
}

const SportChip = ({ sport }: SportChipProps) => {
  return (
    <View style={styles.container}>
      {/* Want to add a little icon here */}
      {/* <FontAwesome name={sport.icon} size={20} color="white" /> */}
      <MonoText>{sport.name}</MonoText>
      <MonoText style={{paddingLeft: 6}}>{sport.skillLevel}</MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4B9CD3',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  }
});

export default SportChip;