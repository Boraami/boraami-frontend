import React from 'react';
import { AlertDialog, Separator, View, Text, Button, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

const WarningAlert = styled(AlertDialog, {
    display: 'flex', 
    alignSelf: "center",
});

type Props = {
    title: string;
    content: string;
    boldText: string;
};

const CancelBtn = styled(Button, {
    borderRadius: "$r-subtle",
    backgroundColor: "$bg-error-strong",
    color: "$text-invert",
    alignSelf: "center",
});

type CancelBtnProps = {
    onPress?: (event: GestureResponderEvent) => void;
    text: string
};

const DeleteBtn = styled(Button, {
    borderRadius: "$r-subtle",
    backgroundColor: "$bg-error-strong",
    color: "$text-invert",
    alignSelf: "center",
});

type DeleteBtnProps = {
    onPress?: (event: GestureResponderEvent) => void;
    text: string
};

export const WarningAlertDialog = ({ title, content }: Props) => {
    return (
    <WarningAlert>
        <View backgroundColor={'$error-alert-fill'} borderColor={'$error-alert-outline'} borderRadius={8} width={330} borderWidth={2}>
            <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between'}}>
                <Text fontFamily={'$heading'}  fontSize={20} color={'$mono.800'}>{title}</Text>
                <AntDesign name="close" size={24} color="black" />
            </View>
            <Separator borderColor={'$error-alert-outline'}/>
            <View style={{ width: '100%', padding: 16 }}>
                <Text fontSize={14}>{content}</Text>
            </View>
            <Separator borderColor={'$error-alert-outline'}/>
            <View style={{ flexDirection: 'row'}}>    
                <CancelBtn>Cancel</CancelBtn>
                <DeleteBtn>I understand. Delete.</DeleteBtn>
            </View>
        </View>
    </WarningAlert>
    )}



    // Is there a variable for the WarningDialog text? 