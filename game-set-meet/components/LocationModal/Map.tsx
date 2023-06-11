import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

interface MapProps {
  lat: number;
  lng: number;
}

const Map = (props: MapProps) => {
  const { lat, lng } = props;
  return (
    <MapView
      style={{ ...StyleSheet.absoluteFillObject }}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );

};

export default Map;