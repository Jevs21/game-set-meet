import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono', fontSize: 16 }]} />;
}

export function MonoTextSubHeader(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono', fontSize: 21, fontWeight: "bold", marginBottom: 4 }]} />;
}

export function MonoTextHeader(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono', fontSize: 36, fontWeight: '500' }]} />;
}

export function BaseText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: 18 }]} />;
}