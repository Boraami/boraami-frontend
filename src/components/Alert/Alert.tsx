import React from 'react';
import { View, TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import { AlertDialog, Button, styled } from 'tamagui';

const WarningDialog = styled(AlertDialog, {
    width: '100%',
    borderColor: '$border-error-subtle',
    borderWidth: 2,  
    borderTopColor: '$text-brand',
    backgroundColor: '$boraami.100',
    borderRadius: "$r-subtle",
    alignSelf: "center",
    display: 'flex', 
    flexDirection: 'row',
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
    return <WarningDialog><h1>{title}</h1><p>{content}</p></WarningDialog>;
    // return <WarningDialog><h1>{title}</h1><p>{content}</p></WarningDialog>;
    // return <WarningDialog><Button><h1>{title}</h1><p>{content}</p></Button></WarningDialog>;
}
