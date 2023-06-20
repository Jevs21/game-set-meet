import { FlatList, TouchableOpacity, View } from "react-native";
import { MonoText, MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { Separator } from "../Themed";
import { useMemo, useState } from "react";

interface ItemType {
  id: number;
  label: string;
  value: string;
}

interface RenderItemProps {
  item: ItemType;
}



const ModalAddSport = () => {
  const [sport, setSport] = useState(0);
  const items = [
    { 
        id: 0, 
        label: 'Archery', 
        value: '1', 
        skillLevels: [
            { id: 0, label: 'Beginner', value: '1' },
            { id: 1, label: 'Intermediate', value: '2' },
            { id: 2, label: 'Advanced', value: '3' },
            { id: 3, label: 'Expert', value: '4' },
        ]
    },
    { 
        id: 1, 
        label: 'Baseball', 
        value: '2', 
        skillLevels: [
            { id: 0, label: 'Beginner', value: '1' },
            { id: 1, label: 'Intermediate', value: '2' },
            { id: 2, label: 'Advanced', value: '3' },
            { id: 3, label: 'Expert', value: '4' },
        ]
    },
    {
        id: 2,
        label: 'Basketball',
        value: '3',
        skillLevels: [
            { id: 0, label: 'Beginner', value: '1' },
            { id: 1, label: 'Intermediate', value: '2' },
            { id: 2, label: 'Advanced', value: '3' },
            { id: 3, label: 'Expert', value: '4' },
        ]
    },
    {
        id: 3,
        label: 'Cricket',
        value: '4',
        skillLevels: [
            { id: 0, label: 'Novice', value: '1' },
            { id: 1, label: 'Club Player', value: '2' },
            { id: 2, label: 'Semi-Pro', value: '3' },
            { id: 3, label: 'Professional', value: '4' },
        ]
    },
    {
        id: 4,
        label: 'Football',
        value: '5',
        skillLevels: [
            { id: 0, label: 'Rookie', value: '1' },
            { id: 1, label: 'Experienced', value: '2' },
            { id: 2, label: 'Skilled', value: '3' },
            { id: 3, label: 'Professional', value: '4' },
        ]
    },
    {
        id: 5,
        label: 'Golf',
        value: '6',
        skillLevels: [
            { id: 0, label: 'Novice', value: '1' },
            { id: 1, label: 'Handicap 10+', value: '2' },
            { id: 2, label: 'Handicap 5+', value: '3' },
            { id: 3, label: 'Pro', value: '4' },
        ]
    },
];


  const skillList = useMemo(() => {
    return items[sport].skillLevels;
  }, [sport]);

  const renderItem = ({ item }: RenderItemProps) => (
    <TouchableOpacity onPress={() => {
      setSport(item.id);
      console.log(`Selected ${item.value}`)
    }}>
      <MonoTextSubHeader style={{paddingVertical: 5}}>{item.label}</MonoTextSubHeader>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 1}}>
        <MonoTextHeader>Add Sport</MonoTextHeader>
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View style={{flex: 1, padding: 5}}>
          <FlatList
            data={items}
            renderItem={renderItem}
            // keyExtractor={(item, index) => item.id || index.toString()}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
        <View style={{flex: 1, padding: 10}}>
          <FlatList
            data={skillList}
            renderItem={renderItem}
            // keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </View>
      
    </View>
  );
};

export default ModalAddSport;

