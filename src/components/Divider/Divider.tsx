import React from 'react';
import { Separator, styled, XStack, Text} from 'tamagui';

const Divider = styled(Separator, {
    borderColor: '$bg-brand-subtle-light', 
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
