import { FlatList, TouchableOpacity, View } from "react-native";
import { MonoText, MonoTextHeader, MonoTextSubHeader } from "../StyledText";
import { Chip, Separator } from "../Themed";
import { useMemo, useState } from "react";
import { generateMasterSportsList } from "../../global/testDataGenerator";

interface ItemType {
  id: number;
  label: string;
  value: string;
}

interface RenderItemProps {
  item: ItemType;
}

interface SkillItemType extends ItemType {
  otherNames: string[];
  description: string;
}

interface RenderSkillItemProps {
  item: SkillItemType;
}



const ModalAddSport = () => {
  const [sport, setSport] = useState(0);
  const [skill, setSkill] = useState(0);

  const items = generateMasterSportsList();


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

  const renderSkillItem = ({ item }: RenderSkillItemProps) => (
    <TouchableOpacity onPress={() => {
      setSkill(item.id);
      console.log(`Selected ${item.value}`)
    }}>
      <View>
        <MonoTextSubHeader style={{paddingVertical: 5, color: item.id === skill ? 'blue' : 'white'}}>{item.label}</MonoTextSubHeader>
        <MonoText>{item.otherNames.join(", ")}</MonoText>
        <MonoText>{item.description}</MonoText>
      </View>
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
            data={items.map((item, index) => {
              return {
                id: index,
                label: item.name,
                value: item.id
              }
            })}
            renderItem={renderItem}
            // keyExtractor={(item, index) => item.id || index.toString()}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
        <View style={{flex: 1, padding: 10}}>
          <FlatList
            data={skillList.map((item, index) => {
              return {
                id: index,
                label: item.name,
                value: item.id,
                otherNames: item.otherNames,
                description: item.description
              }
            })}
            renderItem={renderSkillItem}
            // keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </View>
      <View style={{ height: 50}}>
        <Chip style={{width: '100%'}}>
          <MonoText>Add</MonoText>
        </Chip>
      </View>
      
    </View>
  );
};

export default ModalAddSport;

