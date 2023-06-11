import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function MonoTextHeader(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono', fontSize: 22, fontWeight: '500', marginBottom: 10 }]} />;
}

export function BaseText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: 18 }]} />;
}