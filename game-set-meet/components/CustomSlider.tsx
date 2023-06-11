import { View } from "react-native";
import { MonoText, MonoTextSubHeader } from "./StyledText";
import { Slider } from "react-native-elements";

interface CustomSliderProps {
  value: number;
  label: string;
  readoutPrefix?: string;
  readoutSuffix?: string;
  onChange: (value: number) => void;
}

const CustomSlider = (props: CustomSliderProps) => {
  const { value, label, readoutPrefix, readoutSuffix, onChange } = props;
  return (
    <View style={{flex: 1, alignSelf: 'stretch' }}>
      <MonoTextSubHeader>{label}</MonoTextSubHeader>
      <MonoText>{`${readoutPrefix ? readoutPrefix + ' ' : ""}${value}${readoutSuffix ? ' ' + readoutSuffix : ""}`}</MonoText>
      <Slider
        style={{width: '100%', height: 40, marginVertical: 10}}
        minimumValue={10}
        maximumValue={150}
        step={1}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbStyle={{
          backgroundColor: 'blue'
        }}/>
      
      </View>
  );
};

export default CustomSlider;