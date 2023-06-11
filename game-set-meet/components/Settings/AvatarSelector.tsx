

// const AvatarSelector = () => {
//   // Function for picking an image
//   const pickImage = async () => {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     if (status !== 'granted') {
//       Alert.alert('Sorry, we need camera roll permissions to make this work!');
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImgUrl(result.uri);
//     }
//   };

//   const saveChanges = () => {
//     // Save changes to user data here, using dispatch to update the global state
//     // dispatch(updateUserData({ name, pronouns, bio, imgUrl }));
//   };
//   return (
//     <Avatar
//       rounded
//       source={{ uri: imgUrl }}
//       size="large"
//       onPress={pickImage}
//     />
//   );
// };

// export default AvatarSelector;