import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './batTextInputStyle';

interface BatTextInputProps {
  pass: string,
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput
          placeholder='PASSWORD'
          style={styles.inputer}
          multiline={true}
          value={props.pass}
         />
  );
}