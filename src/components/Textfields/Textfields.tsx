import React from 'react';
import { View, Text, styled, TextArea, Input, Button, XStack, YStack } from 'tamagui';

const TextBox = styled(TextArea, {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 1,
    borderColor: '$placeholder-textbox-fill',
    backgroundColor: '$placeholder-textbox-fill',
    height: 136,
    width: 428,
});

type Props = {};

export const Textfields = ({}: Props) => {

    return (
        <TextBox></TextBox>

    )}



