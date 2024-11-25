import React from 'react';
import { View, Image, Text } from 'react-native';
import batLogo from '../../../assets/bat-logo.png';

import { batLogoStyle } from './batLogoStyle';

export function BatLogo() {
  return (
    <View>      
        <Text style={batLogoStyle.title}>
          BAT PASS GENERATOR
        </Text>
        <Image source={batLogo} style={batLogoStyle.batImage}/>
    </View>
  );
}