import React from 'react';
import { View, styled } from 'tamagui';

const Divider = styled(View, {
    borderColor: '$subtle', 
    width: 420,
    borderWidth: '1',
});

type Props = {
    vertical: boolean;
    borderColor: string;
};

export const Dividers = ({ borderColor }: Props) => {
    return (
        <Divider borderColor={borderColor}/>
    )}
