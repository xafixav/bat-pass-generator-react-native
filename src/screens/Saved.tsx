import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HomeStyles } from './HomeStyles';
import { BatTextInput } from '../components/batTextInput/BatTextInput';
import { BatLogo } from '../components/batLogo/BatLogo';
import { BatButton } from '../components/batButton/batButton';


export default function Home() {
  return (
    <View style={HomeStyles.appContainer}>

      <View style={HomeStyles.logoContainer}>
        <BatLogo />
      </View>


      <View style={HomeStyles.inputContainer}>
        <BatButton />
      </View>

      <StatusBar style={'light'} />
    
    </View>
  );
}

