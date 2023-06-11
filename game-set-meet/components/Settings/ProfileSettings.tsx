import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global/store";
import { Button, Avatar, Slider, Divider } from "react-native-elements";
import { MonoText, MonoTextHeader } from "../StyledText";
import ProfileCardAvailability from "../ProfileCard/ProfileCardAvailability";
import ProfileCardCourtsList from "../ProfileCard/ProfileCardCourtsList";
import ProfileCardSportsList from "../ProfileCard/ProfileCardSportsList";
import ProfileCard from "../ProfileCard/ProfileCard";
import EditTextField from "../EditTextField";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CustomSlider from "../CustomSlider";


const ProfileSettings = () => {
  // Get user data from global store
  const userData = useSelector((state: RootState) => state.userData).userData;
  if (!userData) {
    console.log(userData);
    return null;
  }

  const dispatch = useDispatch();

  // Set initial states
  const [name, setName] = useState(userData.name);
  const [pronouns, setPronouns] = useState(userData.pronouns);
  const [bio, setBio] = useState(userData.bio);
  const [imgUrl, setImgUrl] = useState(userData.imgUrl);
  const [searchRadius, setSearchRadius] = useState(0);


  const pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      // setImgUrl(result.assets[0].uri);
    }
  };

  const saveChanges = () => {
    // Save changes to user data here, using dispatch to update the global state
    // dispatch(updateUserData({ name, pronouns, bio, imgUrl }));
  };

  return (
    <View style={styles.container}>
      {/* <MonoTextHeader>Profile Settings</MonoTextHeader> */}
      <Avatar rounded source={{ uri: userData.imgUrl }} size="large" onPress={pickImage}/>
      <MonoTextHeader>{userData.name}</MonoTextHeader>
      <MonoText>{userData.pronouns}</MonoText>
      <View style={{ flex: 1 }}>
        <EditTextField value={bio} label="Bio:" onChange={() => console.log("CHnaged!")} />
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 20 }}>
        <ProfileCardSportsList sports={userData.sports} />
        <ProfileCardCourtsList courts={userData.courts} />
      </View>

      <Divider style={{ height: 40 }} />
      <CustomSlider 
        value={searchRadius} 
        onChange={setSearchRadius}
        label="Search Radius:"
        readoutPrefix="Within"
        readoutSuffix="km" />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 10,
    // marginHorizontal: 20,
    alignItems: 'center', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
});

export default ProfileSettings;
