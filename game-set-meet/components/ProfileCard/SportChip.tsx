import { Link } from "expo-router";
import { MonoText } from "../StyledText";
import { Chip } from "../Themed";

interface SportChipProps {
  sport: SportData;
}

const SportChip = ({ sport }: SportChipProps) => {
  return (
    <Link href={{pathname: '/modal', params: {
      type: 'sport',
      sportJson: JSON.stringify(sport)
    }}}  asChild>
      <Chip>
        {/* Want to add a little icon here */}
        {/* <FontAwesome name={sport.icon} size={20} color="white" /> */}
        <MonoText>{sport.name}</MonoText>
        <MonoText style={{paddingLeft: 6}}>{sport.skillLevel}</MonoText>
      </Chip>
    </Link>
  );
}

export default SportChip;