import { View } from "react-native";
import { MonoTextSubHeader } from "../StyledText";
import AddChip from "../Settings/AddChip";
import ProfileCardChip from "./ProfileCardChip";

interface ProfileCardChipListProps {
  type: string;
  list: CourtData[] | SportData[] | null;
  add?: boolean;
}

const ProfileCardChipList = ({ type, list, add }: ProfileCardChipListProps) => {
  const title = (type === 'court') ? 'Courts:' : 'Sports:';
  return (
    <View style={{ flex: 1 }}>
      <MonoTextSubHeader>{title}</MonoTextSubHeader>
      {list && list.map((data) => (
        <ProfileCardChip key={data.id} data={data} />
      ))}
      {add && <AddChip type={type} />}
    </View>
  );
}

export default ProfileCardChipList;