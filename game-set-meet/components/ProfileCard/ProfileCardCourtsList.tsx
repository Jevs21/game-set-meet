import { View } from "react-native";
import { MonoText, MonoTextSubHeader } from "../StyledText";
import CourtChip from "./CourtChip";

interface ProfileCardCourtsListProps {
  courts: CourtData[];
}

const ProfileCardCourtsList = ({ courts }: ProfileCardCourtsListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <MonoTextSubHeader>Courts:</MonoTextSubHeader>
      {courts.map((court) => (
        <CourtChip key={court.id} court={court} />
      ))}
    </View>
  );
}

export default ProfileCardCourtsList;