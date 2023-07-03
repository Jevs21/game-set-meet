import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'CenturyGothic', fontSize: 20 }]} />;
}

export function MonoChipText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Gally', fontSize: 16, fontWeight: "bold", color: "#FDFCF6" }]} />;
}

export function MonoTextSubHeader(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'CenturyGothicBold', fontSize: 21, fontWeight: "bold" }]} />;
}

export function MonoTextHeader(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Gally', fontSize: 36, fontWeight: '500' }]} />;
}

export function BaseText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: 18 }]} />;
}