import React from 'react';
import { XStack, YStack, Text } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
};

export const Long = ({ shade }: Props) => {

    return (
        <YStack>
            <XStack style={{ height: 90, width: 330, borderRadius: 4 }}
                backgroundColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-solid-fill'}
                borderWidth={1} 
                borderLeftWidth={ shade === 'outline' ? 1 : 4}
                borderLeftColor = { shade !== 'outline' ? '$default-alert-left-border' : '$default-alert-solid-fill'}
            >
            <XStack flexDirection={'row'} paddingTop={10} width={300} height={66} justifyContent={'space-evenly'}> 
                <AntDesign name={'heart'} size={14} color='white' paddingTop={4}/>
                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={ shade === 'subtle' ? '$btn' : '$heading'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={16}>We are going live in July!</Text>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={14}
                        >We are happy to announce that we are going live on July 28th. Get ready!</Text>            
                </XStack>
            </XStack>
            <AntDesign name="close" size={16} paddingTop={8} color='white'/>
        </XStack>
    </YStack>
)}

