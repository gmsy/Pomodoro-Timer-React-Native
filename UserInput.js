import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

export default function UserInput(props) {
  return (
    <View>
      <Text>Work Time: </Text>
      <Text>Minutes:</Text>
      <TextInput
        onChangeText={props.wtm}
        keyboardType="numeric"
      />
      <Text>Seconds:</Text>
      <TextInput
        onChangeText={props.wts}
        keyboardType="numeric"
      />
      <Text>Break Time: </Text>
      <Text>Minutes:</Text>
      <TextInput
        onChangeText={props.btm}
        keyboardType="numeric"
      />
      <Text>Seconds:</Text>
      <TextInput
        onChangeText={props.bts}
        keyboardType="numeric"
      />
    </View>
  );
}
