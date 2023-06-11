import { View, StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { Icon } from "react-native-elements";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

interface CourtChipProps {
  court: CourtData;
}

const CourtChip = ({ court }: CourtChipProps) => {
  return (
    <View style={styles.container}>
      {/* Want to add a little icon here */}
      <FontAwesome name={"location-arrow"} size={18} color="white" />
      <MonoText style={{paddingLeft: 6}}>{court.name}</MonoText>
      {/* <MonoText >{court.skillLevel}</MonoText> */}
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

export default CourtChip;