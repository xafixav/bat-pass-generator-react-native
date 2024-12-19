import React, {useState} from 'react';
import { View, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { styles } from './batTextInputStyle';

interface BatTextInputProps {
  passSize?: number,
  handlePassSize?: React.Dispatch<React.SetStateAction<number>>,
  pass?: string,
}

export function BatTextInput(props: BatTextInputProps) {
  const [passwordSize, setPasswordSize] = useState(14);

  const handleChange = (value: string) => {
    setPasswordSize(Number(value));
    props.handlePassSize ? props.handlePassSize(Number(value)) : null
  }
  if (props.handlePassSize !== undefined) {
    return (
     
          <TextInput
          placeholder='14'
          style={styles.inputer}
          keyboardType="numeric"
          onChangeText={(value) => handleChange(value)}
          value={passwordSize.toString()}
        />
    )
  }
  return (
      <TextInput
        placeholder='PASSWORD'
        style={styles.inputer}
        value={props.pass}
       />
  );
}