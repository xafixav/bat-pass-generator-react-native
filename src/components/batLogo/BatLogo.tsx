import React from 'react';
import { View, Image, Text } from 'react-native';
import moandkrill from '../../../assets/moandkrill.png';

import { batLogoStyle } from './batLogoStyle';

export function BatLogo() {
  return (
    <View>      
        <Text style={batLogoStyle.title}>
          MO&KRILL PASSWORD GENERATOR
        </Text>
        <Image source={moandkrill} style={batLogoStyle.batImage}/>
    </View>
  );
}