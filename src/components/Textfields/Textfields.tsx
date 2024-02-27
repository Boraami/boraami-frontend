import React from 'react';
import { View, Text, styled, TextArea, Button, XStack, YStack } from 'tamagui';

const TextBox = styled(TextArea, {
    display: 'flex',
    borderRadius: 1,
    borderColor: '$placeholder-textbox-border',
    backgroundColor: '$placeholder-textbox-fill',
    color: '$placeholder-textbox-text',
    fontSize: 14,
    height: 136,
    width: 428,
});

type Props = {
    message: 'string',
    num1: 'number',
    num2: 'number',
};

export const Textfields = ({ message, num1, num2 }: Props) => {

    return (
        <TextBox>
            <View>
                <Text>'Default input. Maximum height of container to occupy only 5 lines of input texts. Provide a scroll post 5 lines.' </Text>
            <View flexDirection='row'>
                <Text>{message}</Text>
                <Text>{num1}/{num2}</Text>
            </View>
            </View>
        </TextBox>
    )}



