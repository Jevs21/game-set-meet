import { View } from "react-native";
import AddChip from "../Settings/AddChip";
import ProfileCardChip from "./ProfileCardChip";

interface ProfileCardChipListProps {
  type: string;
  list: CourtData[] | SportData[] | null;
  add?: boolean;
}

const ProfileCardChipList = ({ type, list, add }: ProfileCardChipListProps) => {
  return (
    <View style={{ flex: 1 }}>
      {list && list.map((data) => (
        <ProfileCardChip key={data.id} data={data} />
      ))}
      {add && <AddChip type={type} />}
    </View>
  );
}

export default ProfileCardChipList;