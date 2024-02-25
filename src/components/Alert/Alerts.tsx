import React from 'react';
import {  View, Text, styled } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

const Alert = styled(View, {
    borderRadius: 4,
    borderLeftWidth: 4,  
    borderLeftColor: '#B48BFF',
    backgroundColor: '#5F3D9C',
    display: 'flex', 
    flexDirection: 'column',
    width: 329, 
    paddingVertical: 12
});

type Props = {
    title: string;
    content?: string;
    backgroundColor: string;
    borderColor?: string,
    borderWidth?: number;
    color: string,
    size?: 'long' | 'short',
    leftIcon: 'heart' | 'checkcircleo' | 'warning',
    leftIconColor: string,
    rightIconColor: string,
};

export const Alerts = ({ title, color, content, borderColor, backgroundColor, size='long', leftIcon }: Props) => {
    return (
    <Alert style={{ borderWidth: 1, borderColor: borderColor, backgroundColor: backgroundColor, height: size==='long' ? 90 : 40}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <AntDesign name={leftIcon} size={14} color="white" />
            <View style={{ width: 250, height: 66 }}>
                <Text fontFamily={'$heading'} fontSize={16} color={color}>{title}</Text> 
                <Text fontFamily={'$body'}  color={color} fontSize={14}>{content}</Text>
                {/* <Text fontFamily={'$body'}  color={color} fontSize={14}>{{ content: size==='long' ? content : 'null'}}</Text> */}
            </View>
            <AntDesign name="close" size={16} color="white" />
        </View>
    </Alert>
    )}
