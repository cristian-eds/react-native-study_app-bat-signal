import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './CustomButtonStyles';

interface CustomButtonProps {
  onPress: () => void,
  titleText: string
}

export function CustomButton(props: CustomButtonProps) {
  return (
    <View style={styles.container}>
        <Pressable style={styles.buttonSignal} onPress={props.onPress}>
          <Text style={styles.textButton}>
            {props.titleText}
          </Text>
        </Pressable>
    </View>
  );
}