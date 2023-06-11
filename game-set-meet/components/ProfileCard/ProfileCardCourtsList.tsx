import { View } from "react-native";
import { MonoText, MonoTextHeader } from "../StyledText";
import CourtChip from "./CourtChip";

interface ProfileCardCourtsListProps {
  courts: CourtData[];
}

const ProfileCardCourtsList = ({ courts }: ProfileCardCourtsListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <MonoTextHeader>Courts:</MonoTextHeader>
      {courts.map((court) => (
        <CourtChip key={court.id} court={court} />
      ))}
    </View>
  );
}

export default ProfileCardCourtsList;