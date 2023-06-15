import { StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { Chip, Icon } from "../Themed";
import { useRouter } from "expo-router";

interface CourtChipProps {
  court: CourtData;
}

const CourtChip = ({ court }: CourtChipProps) => {
  const { push } = useRouter(); 
  return (
    <Chip onPress={() => {
      push({
        pathname: '/modal', 
        params: {
          type: 'location',
          courtJson: JSON.stringify(court),
        },
      });
    }}>
      <Icon name={"location-on"} size={18} style={styles.chipIcon} />
      <MonoText style={styles.chipText} ellipsizeMode='tail' numberOfLines={1}>{court.name}</MonoText>
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

export default CourtChip;