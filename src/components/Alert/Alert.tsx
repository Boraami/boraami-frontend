import React from 'react';
import { View, TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import { AlertDialog, Button, styled } from 'tamagui';

const WarningDialog = styled(AlertDialog, {
    width: '380',
    backgroundColor: '#FFFFF',
    borderColor: '$border-error-subtle'
});

type Props = {
    title: string;
    content: string;
};

const Btn = styled(Button, {
    borderRadius: "$r-subtle",
    backgroundColor: "$bg-error-strong",
    color: "$text-invert",
    alignSelf: "center",
});

type BtnProps = {
    onPress?: (event: GestureResponderEvent) => void;
    text: string

};

export const Alert = ({ title, content}: Props) => {
    return <WarningDialog><Button><h1>{title}</h1><p>{content}</p></Button></WarningDialog>;
}
