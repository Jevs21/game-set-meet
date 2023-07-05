import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Icon } from "./Themed";

interface HeaderIconButtonProps {
  href: string;
  name: string;
  type?: string;
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
          type={props.type ?? 'material'}
        />
    </TouchableOpacity>

  );
};

export default HeaderIconButton;