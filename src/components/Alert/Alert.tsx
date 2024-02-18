import React from 'react';
import { View } from 'react-native';
import { AlertDialog, styled } from 'tamagui'

const WarningDialog = () => styled(AlertDialog, {


});

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
};

export const Alert = ({ onPress, text }: Props) => {
    return <WarningDialog onPress={ onPress }>{text}</WarningDialog>
}
