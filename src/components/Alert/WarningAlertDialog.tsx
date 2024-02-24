import React from 'react';
import { GestureResponderEvent} from 'react-native';
import { View, Text, Button, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

const WarningDialog = styled(View,{
    // width: '100%',
    width: 300, 
    borderColor: '$border-error-subtle',
    borderWidth: 2,  
    borderTopColor: '$text-brand',
    backgroundColor: '$boraami.100',
    // borderRadius: "$r-subtle",
    borderRadius: 100_000_000,
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

export const WarningAlertDialog = ({ title, content}: Props) => {
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
