import React, { useState } from 'react';
import { View, Image, Text, Button, Pressable } from 'react-native';
import { generateRandomText } from '../../service/batGenerator';

import { styles } from './batButtonStyle';
import { BatTextInput } from '../batTextInput/BatTextInput';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass,setPass] = useState('');

  const handleGenerateButton = () => {
    setPass(generateRandomText(12));
  }

  const handleCopyButton = () => {
    Clipboard.setStringAsync(pass);
  }
  return (
    <View style={styles.title}>
        <Pressable
        onPress={handleGenerateButton}
        style={styles.pressableButton}>
        <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <BatTextInput pass={pass}/>

        <Pressable
        onPress={handleCopyButton}
        style={styles.pressableButton}>
        <Text style={styles.text}>⚡COPY⚡</Text>
        </Pressable>
    </View>
  );
}