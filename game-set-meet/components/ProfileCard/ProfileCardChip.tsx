import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MonoText } from "../StyledText";
import { Chip, Icon } from "../Themed";

interface ProfileCardChipProps {
  data: SportData | CourtData;
}

const ProfileCardChip = ({ data }: ProfileCardChipProps) => {
  const { push } = useRouter();
  const pushParams = {
    pathname: '/modal',
    params: {
      type: ('skillLevel' in data) ? 'sport' : 'location',
      dataJson: JSON.stringify(data),
    }
  };
  return (
    <Chip onPress={() => {
      push(pushParams);
    }}>
      {/* Want to add a little icon here */}
      {/* <FontAwesome name="tennisball" size={20} color="white" /> */}
      {/* <Icon name={"sports_tennis"} size={18} style={styles.chipIcon} /> */}
      {/* <MonoText style={styles.chipIcon}>{sport.name}</MonoText> */}
      {'skillLevel' in data ?
        <>
          <MonoText style={styles.chipIcon} ellipsizeMode='tail' numberOfLines={1}>{data.name}</MonoText>
          <MonoText style={styles.chipText}>{data.skillLevel}</MonoText>  
        </> 
        :
        <>
          <Icon name={"location-on"} size={18} style={styles.chipIcon} />
          <MonoText style={styles.chipText} ellipsizeMode='tail' numberOfLines={1}>{data.name}</MonoText>
        </>
      }
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


export default ProfileCardChip;