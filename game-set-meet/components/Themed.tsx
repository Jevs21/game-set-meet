/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

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

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const backgroundColor = 'transparent';
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Card(props: CardProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'cardBackground');
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
  const shadowColor = useThemeColor({ light: lightColor, dark: darkColor }, 'shadowColor');
  
  return <DefaultView style={[{ 
    backgroundColor, borderColor, shadowColor,
    flex: 1,
    borderWidth: 1, 
    elevation: 1,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  }, style]} {...otherProps} />;
}

export function Chip(props: ChipProps) {
  const { style, lightColor, darkColor, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <DefaultView style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#4B9CD3',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 15,
        marginLeft: 5,
        marginVertical: 5,
      }} {...otherProps} />
    </TouchableOpacity>
  );
}

export function Separator(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');

  return <DefaultView style={{
    height: 1,
    width: '100%',
    backgroundColor: borderColor,
    marginVertical: 10,
    opacity: 0.5,
  }} />;
}

