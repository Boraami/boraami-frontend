import React from 'react';
import { View, Text, TextArea, XStack, ScrollView, YStack } from 'tamagui';

// TextArea for multi-line inputs:
// const TextBox = styled(TextArea, {
//     display: 'flex',
//     borderRadius: 1,
//     fontSize: 14,
//     height: 136,
//     width: 350,
//     padding: 10, 
//     borderColor: '$placeholder-textbox-border',
//     backgroundColor: '$placeholder-textbox-fill',
//     color: '$placeholder-textbox-text',
// });

type Props = {
    num1: number,
    num2: number,
    bdColor: string,
    bgColor: string,
    bdWidth: number, 
    color: string,
    helperText: string,
    helperTextColor: string, 
};

    export const Textfields = ({ num1, num2, bdColor, bgColor, color, helperText, helperTextColor }: Props) => {

    return (
        <ScrollView maxHeight={250} paddingBottom={4}>
            <YStack>
                <TextArea borderColor={bdColor} height={136} width={350} backgroundColor={bgColor} borderRadius={6} borderWidth={1}>
                    <Text fontFamily={'$body'} fontSize={12} lineHeight={18} color={color}>Default Input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.</Text>
                </TextArea>
                <XStack flexDirection='row' justifyContent='space-between'>
                    <Text color={helperTextColor}>{helperText}</Text>
                    <Text color={helperTextColor}>{num1}/{num2}</Text>
                </XStack> 
            </YStack>
        </ScrollView>
    )}



