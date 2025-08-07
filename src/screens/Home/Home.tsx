import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';
import { StatusBar } from 'expo-status-bar';
import { BatLogo } from '../../../components/BatLogo/BatLogo';
import { ButtonSignal } from '../../../components/ButtonSignal/ButtonSignal';

export function Home() {
  return (
    <View style={styles.container}>
        <BatLogo />
        <ButtonSignal />
        <StatusBar style="light" />
    </View>
  );
}