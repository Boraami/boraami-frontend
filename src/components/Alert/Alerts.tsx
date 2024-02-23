import React from 'react';
import {  View, Text, styled } from 'tamagui';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Alert = styled(View, {
    borderRadius: 4,
    borderLeftWidth: 4,  
    borderLeftColor: '#B48BFF',
    backgroundColor: '#5F3D9C',
    // backgroundColor: '$bg-brand-strong', - not working
    display: 'flex', 
    flexDirection: 'column',
    width: 329, 
    height: 90,
    paddingVertical: 12
});

type Props = {
    title: string;
    content?: string;
    backgroundColor: string;
    borderColor?: string,
    borderWidth?: number;
    icon?: string,
    color: string,
    // height: 'tall' | 'short',
    // icon size & color
    // close size & color
};

export const Alerts = ({ title, color, content, borderColor, backgroundColor }: Props) => {
    return (
    <Alert style={{borderWidth: 1, borderColor: borderColor, backgroundColor: backgroundColor }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Entypo name="heart" size={20} color="white" />
            <View style={{ width: 247, height: 66, gap: 4 }}>
                <Text style={{ fontFamily: '$fonts.heading', fontSize: '16', color: color}}>{title}</Text> 
                <Text style={{ color: color, fontFamily: '$body', fontSize: '14'}}>{content}</Text>
                {/* <Text style={{ color: 'white'}}>{{content: size=='long' ? content : null}}</Text> */}
            </View>
            <AntDesign name="close" size={20} color="white" />
        </View>
    </Alert>
    )}
