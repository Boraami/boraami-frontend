import React from 'react';
import { useColorScheme } from "react-native";
import { XStack, YStack, SizableText, Text } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { colorScheme } from "../../themes/theme";


type Props = {
    shade: 'solid' | 'subtle' | 'outline',
    alert: string
};

export const Default = ({ shade, alert }: Props) => {
    const theme = useColorScheme();
    let solid = shade === 'solid'
    let subtle = shade === 'subtle'

    return (
        <YStack>
            <XStack style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$default-alert-solid-fill' : shade === 'subtle' ? '$default-alert-subtle-fill' : '$default-alert-solid-fill'}
                borderWidth={1} 
            >
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 
                <AntDesign 
                    name={'heart'} 
                    paddingHorizontal={4} 
                    size={14} 
                    color={ 
                        theme === 'dark' && ( subtle ? colorScheme.boraami[700] : colorScheme.butter[50] ) || (theme === 'light' && solid ? colorScheme.butter[50] : colorScheme.boraami[700] )}    
                    paddingTop={4}
                />
                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={14}>{alert}</Text>        
                </XStack>
            </XStack>
                <AntDesign 
                    name="close" 
                    size={16} 
                    color={ theme === 'dark' && ( subtle ? colorScheme.boraami[700] : colorScheme.butter[50] ) || (theme === 'light' && solid ? colorScheme.butter[50] : colorScheme.boraami[700] )}    
                />
        </XStack>
    </YStack>
)}

