import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './FormHelpStyles';
import { TextInput } from 'react-native';
import { CustomButton } from '../ButtonSignal/CustomButton';

import Toast from 'react-native-toast-message';

interface FormHelpProps {
    onCloseForm: () => void
}

export function FormHelp(props: FormHelpProps) {

    const handleSendSubmitSignal = () => {
        Toast.show(
            {
                type: 'success',
                text1: 'Message Sent',
                text1Style: {
                    fontSize:20
                },
                text2: 'Your help is coming!',
                text2Style: {
                    fontSize: 16
                },
                topOffset: 89,
                onHide() {
                    props.onCloseForm()
                },
            }
        )
    }

    return (
        <View style={styles.containerFormHelp}>
            <Text style={styles.textLabel}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder='Insert your name'
                placeholderTextColor='white'
                inputMode='text'
            />

            <Text style={styles.textLabel}>Phone:</Text>
            <TextInput
                style={styles.input}
                placeholder='Insert your phone'
                placeholderTextColor='white'
                inputMode='text'
            />

            <Text style={styles.textLabel}>Address:</Text>
            <TextInput
                style={[styles.input, styles.inputMultilines]}
                placeholder='Insert your address'
                placeholderTextColor='white'
                inputMode='text'
            />

            <Text style={styles.textLabel}>Observation:</Text>
            <TextInput
                style={[styles.input, styles.inputMultilines]}
                placeholder='Insert your observation'
                placeholderTextColor='white'
                inputMode='text'
                multiline={true}
            />
            <Toast />
            <CustomButton titleText='SEND' onPress={handleSendSubmitSignal}/>
        </View>
    );
}