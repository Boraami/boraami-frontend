import React from 'react';
import { Separator, styled, XStack } from 'tamagui';

const Divider = styled(Separator, {
    borderColor: '$boraami.400', 
    width: 420,
    borderWidth: '1',
});

type Props = {
    vertical: boolean;
    borderColor: string;
};

export const Dividers = ({ vertical, borderColor }: Props) => {
    return (
        <XStack alignItems="center">
            <Divider vertical={vertical} borderColor={borderColor}/>
        </XStack>
    )}
