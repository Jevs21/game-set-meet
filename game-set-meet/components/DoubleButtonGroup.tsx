import { Animated, Button, Dimensions, TouchableOpacity, View } from "react-native"
import { useEffect, useRef, useState } from "react";
import Colors from "../constants/Colors";
import { MonoTextSubHeader } from "./StyledText";
// import { View } from "../Themed"

interface TabButtonProps {
  text: string;
  onPress: () => void;
  active: boolean;
}

const TabButton = ({text, onPress, active}: TabButtonProps) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress} >
      <View style={{
          flex: 1, 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
        <MonoTextSubHeader>{text}</MonoTextSubHeader>
      </View>
    </TouchableOpacity>
  );
}

interface DoubleButtonGroupProps {
  selected: number;
  setSelected: (index: number) => void;
  titles: string[];
}

const DoubleButtonGroup = ({selected, setSelected, titles}: DoubleButtonGroupProps) => {
  const animate = useRef(new Animated.Value(0)).current; // Create animated value

  const { width } = Dimensions.get('window'); // Get screen width
  const buttonWidth = width / 2; // Adjust this value to the number of tabs you have

  // Animate border on button press
  useEffect(() => {
    Animated.timing(animate, {
      toValue: selected * buttonWidth,
      duration: 100,
      useNativeDriver: false
    }).start();
  }, [selected]);

  return (
    <View style={{flex: 1, flexDirection: 'row', position: 'relative'}}>
      <TabButton text={titles[0]} onPress={() => setSelected(0)} active={selected === 0}/>
      <TabButton text={titles[1]} onPress={() => setSelected(1)} active={selected === 1}/>

      <Animated.View 
        style={{
          position: 'absolute', 
          bottom: 0, 
          height: 2, 
          backgroundColor: Colors.light.chipBackground,
          width: buttonWidth,
          transform: [{ translateX: animate }] // Animate this value
        }}
      />
    </View>
  );
}

export default DoubleButtonGroup;