import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MonoText } from "../StyledText";
import { Chip, Icon } from "../Themed";
import { FontAwesome } from "@expo/vector-icons";

interface SportChipProps {
  sport: SportData;
}

const SportChip = ({ sport }: SportChipProps) => {
  const { push } = useRouter();
  return (
    <Chip onPress={() => {
      push({
        pathname: '/modal', 
        params: {
          type: 'sport',
          courtJson: JSON.stringify(sport),
        },
      });
    }}>
      {/* Want to add a little icon here */}
      {/* <FontAwesome name="tennisball" size={20} color="white" /> */}
      {/* <Icon name={"sports_tennis"} size={18} style={styles.chipIcon} /> */}
      {/* <MonoText style={styles.chipIcon}>{sport.name}</MonoText> */}
      <MonoText style={styles.chipIcon} ellipsizeMode='tail' numberOfLines={1}>{sport.name}</MonoText>
      <MonoText style={styles.chipText}>{sport.skillLevel}</MonoText>
    </Chip>
  );
}

const styles = StyleSheet.create({
  chipIcon: {
    paddingRight: 2,
    paddingLeft: 4,
  },
  chipText: {
    paddingRight: 26,
    paddingLeft: 2,
  },
});

export default SportChip;