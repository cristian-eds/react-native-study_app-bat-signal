import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './BatLogoStyles';

import batLogo from '../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <View style={styles.containerLogo}>
        <Image source={batLogo} style={styles.imageLogo}/>
    </View>
  );
}