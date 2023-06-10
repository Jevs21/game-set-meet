import { View } from "react-native";
import { MonoText, MonoTextHeader } from "../StyledText";

interface ProfileCardSportsListProps {
  sports: SportData[];
}

const ProfileCardSportsList = ({ sports }: ProfileCardSportsListProps) => {
  return (
    <View style={{}}>
      <MonoTextHeader>Sports:</MonoTextHeader>
      {sports.map((sport) => (
        <MonoText key={sport.id}>{sport.name}</MonoText>
      ))}
    </View>
  );
}

export default ProfileCardSportsList;