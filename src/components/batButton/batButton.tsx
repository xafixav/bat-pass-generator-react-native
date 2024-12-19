import React, { useState } from 'react';
import { View, Image, Text, Button, Pressable, Alert } from 'react-native';
import { generateRandomText } from '../../service/batGenerator';

import { styles } from './batButtonStyle';
import { BatTextInput } from '../batTextInput/BatTextInput';

import * as Clipboard from 'expo-clipboard';
import { correctAlert, wrongAlert } from '../../service/Alerts';
import AlertInterface from '../../service/interfaces/Alert';

export function BatButton() {
  const [pass,setPass] = useState('');
  const [passSize, setPassSize] = useState(14);

  const handlePassSize = (value: React.Dispatch<React.SetStateAction<number>>) => {
    setPassSize(Number(value));
  }

  const handleGenerateButton = () => {
    setPass(generateRandomText(passSize));
  }

  const handleCopyButton = () => {
    if (pass === '') {
      return showAlert(wrongAlert);
    }
    showAlert(correctAlert);
    Clipboard.setStringAsync(pass);
  }

  const showAlert = ({title, message, buttonsOptions, cancelable}: AlertInterface) => {
    Alert.alert(
      title,           // Title of the alert
      message, // Message to be displayed in the alert
      buttonsOptions,
      cancelable      // Whether tapping outside the alert should dismiss it
    );
  };

  return (
    <View style={styles.title}>
        <Pressable
        style={styles.pressableButton}>
        <Text style={styles.text}>PASSWORD SIZE:</Text>
        </Pressable>

        <BatTextInput handlePassSize={setPassSize} passSize={passSize}/>

        <Pressable
        onPress={handleGenerateButton}
        style={styles.pressableButton}>
        <Text style={styles.text}>⚡DIG THAT HOLE⚡</Text>
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