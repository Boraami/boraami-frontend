import React from 'react';
import { AlertDialog, View, Text, styled } from 'tamagui';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Alert = styled(AlertDialog, {
    // width: '100%',
    borderWidth: 1,  
    width: 329, 
    height: 90,
    backgroundColor: '$bg-brand-strong',
    borderRadius: "$r-subtle",
    borderColor: '$border-brand-subtle',
    display: 'flex', 
    flexDirection: 'row',
});

type Props = {
    title: string;
    content: string;
};


export const Alerts = ({ title, content }: Props) => {
    return (
    <Alert>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Entypo name="heart" size={20} color="black" />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'Poppins', fontSize: '30'}}>{title}</Text>
                <Text style={{ fontFamily: 'Poppins', fontSize: '20'}}>{content}</Text>
            </View>
            <AntDesign name="close" size={20} color="black" />
        </View>
        <View style={{ width: '100%', padding: 16 }}>
            <Text>{content}</Text>
        </View>
    </Alert>
    )}
