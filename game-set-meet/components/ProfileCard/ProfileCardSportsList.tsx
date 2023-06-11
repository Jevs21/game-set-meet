import { View } from "react-native";
import { MonoText, MonoTextHeader } from "../StyledText";
import SportChip from "./SportChip";

interface ProfileCardSportsListProps {
  sports: SportData[];
}

const ProfileCardSportsList = ({ sports }: ProfileCardSportsListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <MonoTextHeader>Sports:</MonoTextHeader>
      {sports.map((sport) => (
        <SportChip key={sport.id} sport={sport} />
        // <MonoText key={sport.id}>{sport.name}</MonoText>
      ))}
    </View>
  );
}

export default ProfileCardSportsList;