import React from 'react';
import {  View, Text, styled } from 'tamagui';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Alert = styled(View, {
    borderLeftWidth: 4,  
    borderRadius: 4,
    width: 329, 
    height: 90,
    backgroundColor: '#5F3D9C',
    display: 'flex', 
    flexDirection: 'column',
    borderLeftColor: '#B48BFF',
    paddingVertical: 12
});

type Props = {
    title: string;
    content: string;
};

export const Alerts = ({ title, content }: Props) => {
    return (
    <Alert>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Entypo name="heart" size={20} color="white" />
            <View style={{ color: 'white', backgroundColor: '#5F3D9C', width: 247, height: 66, gap: 4 }}>
                <Text style={{ fontFamily: 'Poppins', fontSize: '16', lineHeight: '20', fontWeight: '700', color: '#FFFFFF'}}>{title}</Text>
                <Text style={{ color: 'white'}}>{content}</Text>
            </View>
            <AntDesign name="close" size={20} color="white" />
        </View>
    </Alert>
    )}
