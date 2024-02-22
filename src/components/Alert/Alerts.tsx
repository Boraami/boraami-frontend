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
    // size?: 'long' | 'short'; 
};

export const Alerts = ({ title, content }: Props) => {
    // export const Alerts = ({ title, content, size='long' }: Props) => {
    return (
    <Alert>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Entypo name="heart" size={20} color="white" />
            {/* Title/Poppins700_16px, Content/OpenSans400_14px */}
            <View style={{ width: 247, height: 66, gap: 4 }}>
                <Text style={{ font: '$btn', fontSize: '16', color: 'white'}}>{title}</Text> 
                <Text style={{ color: 'white', font: '$body', fontSize: '14'}}>{content}</Text>
                {/* <Text style={{ color: 'white'}}>{{content: size=='long' ? content : null}}</Text> */}
            </View>
            <AntDesign name="close" size={20} color="white" />
        </View>
    </Alert>
    )}
