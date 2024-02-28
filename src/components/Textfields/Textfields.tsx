import React from 'react';
import { View, Text, styled, TextArea, ScrollView, YStack } from 'tamagui';

const TextBox = styled(TextArea, {
    display: 'flex',
    borderRadius: 1,
    borderColor: '$placeholder-textbox-border',
    backgroundColor: '$placeholder-textbox-fill',
    color: '$placeholder-textbox-text',
    fontSize: 14,
    height: 136,
    width: 350,
    padding: 10, 
});

type Props = {
    num1: number,
    num2: number,
    bdColor: string,
    bgColor: string,
    bdWidth: number, 
    color: string,
    errorText: string,
    errorTextColor: string, 
    
};

    export const Textfields = ({ num1, num2, bdColor, bgColor, bdWidth, color, errorText, errorTextColor }: Props) => {

    return (
        <View>
            <TextBox borderColor={bdColor} backgroundColor={bgColor} borderRadius={6} borderWidth={bdWidth}>
                <Text lineHeight={18} color={color}>Default Input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.</Text>
            </TextBox>
                <View flexDirection='row' justifyContent='space-between'>
                    <Text color={errorTextColor}>{errorText}</Text>
                    <Text>{num1}/{num2}</Text>
                </View> 

       </View>
    )}



