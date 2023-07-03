import { View } from "react-native";
import { useThemeColor } from "./Themed"

const TopUtilityContainer = (props: any) => {
  const color = useThemeColor({}, 'background');


  return (
    <View style={{ 
        height: 40, 
        width: '100%', 
        backgroundColor: color,
        }}>
      {props.children}
    </View>
  )
}

export default TopUtilityContainer;