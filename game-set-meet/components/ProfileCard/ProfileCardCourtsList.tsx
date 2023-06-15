import { View } from "react-native";
import { MonoTextSubHeader } from "../StyledText";
import CourtChip from "./CourtChip";

interface ProfileCardCourtsListProps {
  courts: CourtData[] | null;
}

const ProfileCardCourtsList = ({ courts }: ProfileCardCourtsListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <MonoTextSubHeader>Courts:</MonoTextSubHeader>
      {courts && courts.map((court) => (
        <CourtChip key={court.id} court={court} />
      ))}
    </View>
  );
}

export default ProfileCardCourtsList;