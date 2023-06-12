// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import Colors from '../../constants/Colors';

// const ChatInput = () => {
//   const [message, setMessage] = useState('');

//   const sendMessage = () => {
//     // here, you would normally send the message to your backend server
//     console.log(message);
//     setMessage('');
//   };

//   return (
//     <View style={{
//       flexDirection: 'row', 
//       alignItems: 'center', 
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       borderTopColor: Colors.light.borderColor,
//       borderTopWidth: 1,
//       backgroundColor: Colors.light.background
//     }}>
//       <TextInput 
//         style={{
//           flex: 1,
//           paddingHorizontal: 10,
//           paddingVertical: 5,
//           borderRadius: 20,
//           borderWidth: 1,
//           borderColor: Colors.light.borderColor,
//           backgroundColor: Colors.light.tint
//         }}
//         placeholder="Type a message"
//         value={message}
//         onChangeText={setMessage}
//       />
//       <TouchableOpacity 
//         style={{
//           marginLeft: 5,
//           padding: 10,
//           borderRadius: 25,
//           backgroundColor: Colors.light.borderColor
//         }}
//         onPress={sendMessage}
//       >
//         <MaterialIcons name="send" size={24} color={Colors.light.text} />
//       </TouchableOpacity>
//     </View>
//   );
// }


// export default ChatInput;



import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // here, you would normally send the message to your backend server
    console.log(message);
    setMessage('');
  };

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderTopColor: Colors.light.borderColor,
      borderTopWidth: 1,
      backgroundColor: Colors.light.background
    }}>
      <TextInput 
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Colors.light.borderColor,
          backgroundColor: Colors.light.tint
        }}
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity 
        style={{
          marginLeft: 5,
          padding: 10,
          borderRadius: 25,
          backgroundColor: Colors.light.borderColor
        }}
        onPress={sendMessage}
      >
        <MaterialIcons name="send" size={24} color={Colors.light.text} />
      </TouchableOpacity>
    </View>
  );
}


export default ChatInput;