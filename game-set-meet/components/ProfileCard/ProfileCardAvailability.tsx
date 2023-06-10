import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MonoText, MonoTextHeader } from '../StyledText';

interface ProfileCardAvailabilityProps {
  availability: boolean[][] | null;
}

const AvailabilitySquare = ({ val }: { val: boolean }) => (
  <View style={[styles.square, val ? styles.available : styles.notAvailable]} />
);

const ProfileCardAvailability = ({ availability }: ProfileCardAvailabilityProps) => {
  const colHeaders = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const rowHeaders = ['', 'Morn.', 'Aft.', 'Eve.'];

  return (
    <View style={styles.container}>
      <MonoTextHeader>Availability:</MonoTextHeader>
      <View style={styles.grid}>
        <View style={styles.rowHeader}>
          {rowHeaders.map((header, index) => (
            <MonoText key={index}>{header}</MonoText>
          ))}
        </View>
        {availability && availability.map((day, dayIndex) => (
          <View key={dayIndex} style={styles.column}>
            <MonoText>{colHeaders[dayIndex]}</MonoText>
            {day.map((available, timeIndex) => (
              <AvailabilitySquare key={`${dayIndex}-${timeIndex}`} val={available} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 30,
    height: 15,
    borderRadius: 2,
    marginVertical: 4,
  },
  available: {
    backgroundColor: 'rgba(0, 255, 0, 0.25)',
  },
  notAvailable: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default ProfileCardAvailability;
