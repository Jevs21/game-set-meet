import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function MonoTextHeader(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono', fontSize: 20, fontWeight: '500', marginBottom: 10 }]} />;
}
