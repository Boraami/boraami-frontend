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
    boldText: string
};

export const WarningAlertDialog = ({ title, content, boldText }: Props) => {
    return (
    <WarningAlert>
        <View backgroundColor={'$error-alert-fill'} borderColor={'$error-alert-outline'} borderRadius={8} width={330} borderWidth={2}>
            <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between'}}>
                <Text fontFamily={'$heading'} fontSize={20} style={{ color: '$error-title-text'}}>{title}</Text>
                <AntDesign name="close" size={24} style={{ color: '$error-title-text'}} />
            </View>
            <Separator borderColor={'$error-alert-outline'}/>
            <View style={{ width: '100%', padding: 16 }}>
                <Text style={{ color: 'error-title-text' }} fontSize={14} >{content}
                <Text style={{ color: '$error-highlighted-text' }} fontSize={14} >{boldText}
                <Text style={{ color: '$error-highlighted-text' }} fontSize={14} >.</Text></Text></Text>
            </View>
            <Separator borderColor={'$error-alert-outline'}/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>    
                <CancelBtn style={{ color: '$error-title-text'}} fontFamily={'$body'} fontSize={14} >Cancel</CancelBtn>
                <DeleteBtn style={{ color: '$error-title-text'}} fontFamily={'$body'} fontSize={14} height={30} width={160} backgroundColor={'$default-alert-solid-fill'} borderRadius={4} padding={2} >I understand. Delete.</DeleteBtn>
            </View>
        </View>
    </WarningAlert>
)}

