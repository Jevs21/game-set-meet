import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { MonoText, MonoChipText } from "../StyledText";
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
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <MonoChipText style={styles.chipIcon} ellipsizeMode='tail' numberOfLines={1}>{data.name}</MonoChipText>
          <MonoChipText>{data.skillLevel.slice(0, 3)}.</MonoChipText>  
        </View> 
        :
        <>
          <Icon name={"location-on"} size={18} style={styles.chipIcon} />
          <MonoChipText style={styles.chipText} ellipsizeMode='tail' numberOfLines={1}>{data.name}</MonoChipText>
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