import { View } from "react-native";
import { MonoTextHeader, MonoTextSubHeader } from "../StyledText";

interface ModalSportProps {
  sport: SportData;
}

const ModalSport = ({ sport }: ModalSportProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MonoTextHeader>{sport.name}</MonoTextHeader> 
      <MonoTextSubHeader>{sport.skillLevel}</MonoTextSubHeader>
    </View>
  );
}

export default ModalSport;
