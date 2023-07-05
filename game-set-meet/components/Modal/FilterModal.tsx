import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

const FilterModal = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Filters' });
  }, [navigation]);

  return (
    <></>
  );
};

export default FilterModal;