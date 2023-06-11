import { MonoText } from "../StyledText";
import { Chip } from "../Themed";

interface SportChipProps {
  sport: SportData;
}

const SportChip = ({ sport }: SportChipProps) => {
  return (
    <Chip>
      {/* Want to add a little icon here */}
      {/* <FontAwesome name={sport.icon} size={20} color="white" /> */}
      <MonoText>{sport.name}</MonoText>
      <MonoText style={{paddingLeft: 6}}>{sport.skillLevel}</MonoText>
    </Chip>
  );
}

export default SportChip;