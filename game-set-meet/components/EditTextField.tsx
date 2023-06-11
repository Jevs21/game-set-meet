import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { MonoTextSubHeader } from "./StyledText";

interface EditTextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const EditTextField = (props: EditTextFieldProps) => {
  const { value, label, onChange } = props;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={style.container}>
      <MonoTextSubHeader style={style.label}>{label}</MonoTextSubHeader>
      <TextInput
        value={value}
        editable={true}
        onChangeText={(x) => console.log(x)}
        autoCorrect={false}
        blurOnSubmit={true}
        keyboardType="default"
        style={style.input}
        multiline={true}
        numberOfLines={6}
        
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    fullWidth: true,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    fontSize: 20,
    color: "white",
    padding: 10,
    minHeight: 100,
    minWidth: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 5,
  }
});
export default EditTextField;
