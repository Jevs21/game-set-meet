import { View } from "react-native";
import { MonoText, MonoTextSubHeader } from "../StyledText";
import SportChip from "./SportChip";

interface ProfileCardSportsListProps {
  sports: SportData[];
}

const ProfileCardSportsList = ({ sports }: ProfileCardSportsListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <MonoTextSubHeader>Sports:</MonoTextSubHeader>
      {sports.map((sport) => (
        <SportChip key={sport.id} sport={sport} />
        // <MonoText key={sport.id}>{sport.name}</MonoText>
      ))}
    </View>
  );
}

export default ProfileCardSportsList;