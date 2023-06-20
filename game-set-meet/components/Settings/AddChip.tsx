import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { Chip } from "../Themed";

interface AddChipProps {
  type: string;
}

const AddChip = ({ type }: AddChipProps) => {
  const pushParams = {
    pathname: '/modal',
    params: {
      type: (type === 'court') ? 'add_court' : 'add_sport',
    }
  };
  const chipText = (type === 'court') ? 'Add a court' : 'Add a sport';

  const { push } = useRouter();
  return (
    <Chip style={{
      justifyContent: 'center',
      backgroundColor: '#3A94CF',
      
    }} onPress={() => push(pushParams) }>
      <MonoText style={styles.chipIcon} ellipsizeMode='tail' numberOfLines={1}>{chipText}</MonoText>
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

export default AddChip;