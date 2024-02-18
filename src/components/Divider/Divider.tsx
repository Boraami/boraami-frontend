import React from 'react';
import { Separator, styled, XStack, Text} from 'tamagui';

const Divider = styled(Separator, {
    borderColor: '$bg-brand-subtle-light', 
    width: 420,
    paddingTop: 30, 
    borderWidth: '1',
});

type Props = {
    vertical: boolean;
};

export const Dividers = ({ vertical }: Props) => {
    return (
        <XStack alignItems="center">
            <Text></Text>
            <Divider vertical={vertical}/>
        </XStack>
    )}
