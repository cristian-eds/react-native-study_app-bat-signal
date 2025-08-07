import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './ButtonSignalStyles';

export function ButtonSignal() {
  return (
    <View style={styles.container}>
        <Pressable style={styles.buttonSignal}>
          <Text style={styles.textButton}>
            Active Signal
          </Text>
        </Pressable>
    </View>
  );
}