import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';

import { StatusBar } from 'expo-status-bar';
import { BatLogo } from '../../../components/BatLogo/BatLogo';
import { CustomButton } from '../../../components/ButtonSignal/CustomButton';
import { FormHelp } from '../../../components/FormHelp/FormHelp';

export function Home() {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenForm = () => {
        setIsFormOpen(true);
    }

    const handleCloseForm = () => {
        setIsFormOpen(false);
    }

    return (
        <View style={styles.container}>
            {!isFormOpen ? <>
                <BatLogo />
                <CustomButton onPress={handleOpenForm} titleText='Active Signal'/>
                <StatusBar style="light" />

            </> : <FormHelp onCloseForm={handleCloseForm} />}

        </View>
    );
}