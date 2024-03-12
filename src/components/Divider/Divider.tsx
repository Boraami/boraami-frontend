import React from 'react';
import { Separator, styled } from 'tamagui';

const Divider = styled(Separator, {
    borderColor: '$subtle', 
    width: 420,
    borderWidth: '1',
});

type Props = {
    vertical: boolean;
    borderColor: string;
};

export const Dividers = ({ vertical, borderColor }: Props) => {
    return (
        <Divider vertical={vertical} borderColor={borderColor}/>
    )}
