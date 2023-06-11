import { MonoText } from "../StyledText";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { Chip } from "../Themed";
import { Link } from "expo-router";

interface CourtChipProps {
  court: CourtData;
}

const CourtChip = ({ court }: CourtChipProps) => {
  console.log(court);
  return (
    <Link href={{pathname: '/modal', params: {
      type: 'location',
      courtJson: JSON.stringify(court)
    }}}  asChild>
      <Chip onPress={() => console.log(court.name)}>
        {/* Want to add a little icon here */}
        <FontAwesome name={"location-arrow"} size={18} color="white" />
        <MonoText style={{paddingLeft: 6}}>{court.name}</MonoText>
        {/* <MonoText >{court.skillLevel}</MonoText> */}
      </Chip>
    </Link>
  );
}


export default CourtChip;