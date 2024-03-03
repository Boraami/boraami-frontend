import React from 'react';
import { XStack, YStack, Text } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
};

export const Error = ({ shade }: Props) => {

    return (
        <YStack>
            <XStack style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$warning-alert-solid-fill' : shade === 'subtle' ? '$warning-alert-subtle-fill' : '$warning-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$warning-alert-solid-fill' : shade === 'subtle' ? '$warning-alert-subtle-fill' : '$warning-alert-solid-fill'}
                borderWidth={1} 
            >
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 
                <AntDesign name={'warning'} paddingHorizontal={12} size={14} color='white' paddingTop={4}/>
                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$warning-alert-solid-text' : shade === 'subtle' ? '$warning-alert-subtle-text' : '$warning-alert-outline-text'}
                        fontSize={14}>Poor internet connection!</Text>        
                </XStack>
            </XStack>
            <AntDesign name="close" size={16} color='white'/>
        </XStack>
    </YStack>
)}

