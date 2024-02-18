import React from 'react';
import { View, TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import { AlertDialog, Button, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

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
    return <WarningDialog>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={{ fontFamily: 'Poppins', fontSize: '20'}}>{title}</Text>
            <AntDesign name="close" size={24} color="black" />
        </View>
        <View style={{ width: '100%', padding: 16 }}>
        {/* <View style={{ flexDirection: 'column', justifyContent: 'flex-start'}}> */}
            <Text>{content}</Text>
        </View>
    </WarningDialog>;
    }
