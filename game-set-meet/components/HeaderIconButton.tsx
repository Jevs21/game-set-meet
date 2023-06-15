import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Icon } from "./Themed";

interface HeaderIconButtonProps {
  href: string;
  name: string;
  size?: number;
}

const HeaderIconButton = (props: HeaderIconButtonProps) => {
  const { href, name } = props;
  const size = props.size ?? 25;
  const { push } = useRouter();
  return (
    <TouchableOpacity 
      onPress={() => push(href) }
      style={{ marginRight: 25 }}>
        <Icon
          name={name}
          size={size}
        />
    </TouchableOpacity>

  );
};

export default HeaderIconButton;