import React from 'react';
import { XStack, YStack, SizableText } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
};

export const Default = ({ shade }: Props) => {

    return (
        <YStack>
            <XStack style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-solid-fill'}
                borderWidth={1} 
            >
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 
                <AntDesign name={'heart'} paddingHorizontal={4} size={14} color='white' paddingTop={4}/>
                <XStack width={250} flexDirection='column'>
                    <SizableText 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={14}>We are going live in July!</SizableText>        
                </XStack>
            </XStack>
            <AntDesign name="close" size={16} color='white'/>
        </XStack>
    </YStack>
)}

