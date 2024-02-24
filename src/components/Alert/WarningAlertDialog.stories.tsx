import React from 'react';
import { GestureResponderEvent} from 'react-native';
import { AlertDialog, View, Text, Button, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

const WarningDialog = styled(AlertDialog, {
    width: '330px',
    // height: '217',
    borderColor: '$border-error-subtle',
    borderWidth: 2,  
    backgroundColor: '#FFFFFF',
    // borderRadius: '8px',
    alignSelf: "center",
    display: 'flex', 
    flexDirection: 'row',
});

type WarningDialogProps = {
    title: string;
    content: string;
};

const CancelBtn = styled(Button, {
    alignSelf: 'center',
    // fontFamily: 'Poppins_500Medium', 
    fontWeight: '500', 
    // lineHeight: '14', 
    alignItems: 'center', 
    width: '165',
    height: '32',
    paddingVertical: '6',
    paddingHorizontal: '10',
    gap: '6'
})

type CancelBtnProps = {
    onPress?: (event: GestureResponderEvent) => void;
    text: string
};

const DeleteBtn = styled(Button, {
    alignSelf: 'center',
    // fontFamily: 'Poppins_500Medium', 
    fontWeight: '500', 
    // lineHeight: '14', 
    alignItems: 'center', 
    backgroundColor: 'bg-brand-strong',
    width: '165',
    height: '32',
    paddingVertical: '6',
    paddingHorizontal: '10',
    gap: '6'
})

type DeleteBtnProps = {
    onPress?: (event: GestureResponderEvent) => void;
    text: string
}

export const WarningAlertDialog = ({ title, content}: WarningDialogProps) => {
    return (
    <WarningDialog>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={{ fontFamily: 'Poppins', fontSize: '16', fontWeight: '700', lineHeight: '20'}}>{title}</Text>
            <AntDesign name="close" size={24} color="black" />
        </View>
        {/* Divider */}
        <View>
            <Text style={{ fontFamily: 'OpenSans', fontSize: '14', fontWeight: '700', lineHeight: '21' }}>{content}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
             <CancelBtn style={{ backgroundColor: 'red'}}>Cancelled</CancelBtn>
             <DeleteBtn style={{ backgroundColor: '$bg-brand-strong'}}>I understand. Delete</DeleteBtn>
        </View>
    </WarningDialog>)
    }


    