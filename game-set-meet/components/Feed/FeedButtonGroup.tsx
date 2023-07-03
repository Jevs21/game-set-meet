import { Animated, Button, Dimensions, TouchableOpacity, View } from "react-native"
import { MonoTextSubHeader } from "../StyledText";
import { useEffect, useRef, useState } from "react";
import Colors from "../../constants/Colors";
// import { View } from "../Themed"

interface FeedButtonProps {
  text: string;
  onPress: () => void;
  active: boolean;
}

const FeedButton = ({text, onPress, active}: FeedButtonProps) => {
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

interface FeedButtonGroupProps {
  selected: number;
  setSelected: (index: number) => void;
}

const FeedButtonGroup = ({selected, setSelected}: FeedButtonGroupProps) => {
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
      <FeedButton text="Individuals" onPress={() => setSelected(0)} active={selected === 0}/>
      <FeedButton text="Teams" onPress={() => setSelected(1)} active={selected === 1}/>

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

export default FeedButtonGroup;