/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../constants/Colors';
// import { Icon as RNEIcon, IconProps } from 'react-native-vector-icons';
import { Icon as RNEIcon, IconProps } from 'react-native-elements';
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type CardProps = ThemeProps & DefaultView['props'];
export type ChipProps = ThemeProps & DefaultView['props'] & TouchableOpacity['props'];
export type CustomIconProps = ThemeProps & IconProps;
export type SearchBarProps = ThemeProps & TextInput['props'];

// export type CustomIconProps = ThemeProps & IconProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  let backgroundColor;
  if (lightColor || darkColor) {
    backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  } else {
    backgroundColor = 'transparent';
  }

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Card(props: CardProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'cardBackground');
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
  const shadowColor = useThemeColor({ light: lightColor, dark: darkColor }, 'shadowColor');
  
  return <DefaultView style={[{ 
    backgroundColor, borderColor, shadowColor,
    // flex: 1,
    borderWidth: 1, 
    elevation: 1,
    margin: 20,
    marginTop: 30,
    borderRadius: 10,
  }, style]} {...otherProps} />;
}

export function Chip(props: ChipProps) {
  const { style, lightColor, darkColor, onPress, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'chipBackground');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'chipText');
  return (
    <TouchableOpacity onPress={onPress}>
      <DefaultView style={[{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor,
        borderRadius: 6,
        // paddingVertical: 8,
        // paddingHorizontal: 4,
        height: 40,
        paddingLeft: 2,
        marginVertical: 5,
      }, style]} {...otherProps} />
    </TouchableOpacity>
  );
}

export function Separator(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');

  return <DefaultView style={[{
    height: 1,
    width: '100%',
    backgroundColor: borderColor,
    marginVertical: 5,
    opacity: 0.5,
  }, style]} />;
}

export function Icon(props: CustomIconProps) {
  const { style, lightColor, darkColor, name, type, size, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
  return <RNEIcon name={name} type={type} size={size} color={color} {...otherProps} />;
  // return <RNEIcon name={name} size={size} color={color} style={style} {...otherProps} />;
}

export function SearchBar(props: SearchBarProps) {
  const { style, value, onChangeText, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <View style={{
      width: '100%',
      height: 60,
    }}>
      <TextInput 
        style={{
          flex: 1,
          height: 40,
          margin: 10,
          marginHorizontal: 20,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: borderColor,
          backgroundColor: 'transparent'
        }}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}/>
    </View>
  );
}



