import React from 'react';
import { useColorScheme } from "react-native";
import { XStack, YStack, SizableText, Text } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { colorScheme } from "../../themes/theme";

// Don't push, just commit 

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
    alert: string
};

export const Error = ({ shade, alert }: Props) => {
    const theme = useColorScheme();
    let solid = shade === 'solid'
    let outline = shade === 'outline'

    return (
        <YStack>
            <XStack style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$warning-alert-solid-fill' : shade === 'subtle' ? '$warning-alert-subtle-fill' : '$warning-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$warning-alert-solid-fill' : shade === 'subtle' ? '$warning-alert-subtle-fill' : '$warning-alert-solid-fill'}
                borderWidth={1} 
            >
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 
                <Entypo
                    name={'warning'} 
                    paddingHorizontal={12} 
                    size={14} 
                    color={theme === 'dark' && ( solid ? colorScheme.mono[800] : colorScheme.ptd[500] ) || (theme === 'light' && solid ? colorScheme.mono[800] : colorScheme.ptd[500] )}    
                    paddingTop={4}
                />
                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$warning-alert-solid-text' : shade === 'subtle' ? '$warning-alert-subtle-text' : '$warning-alert-outline-text'}
                        fontSize={14}>{alert}</Text>        
                </XStack>
            </XStack>
                <AntDesign 
                    name="close" 
                    size={16} 
                    color={(theme === 'dark' && outline) ? colorScheme.ptd[500] : colorScheme.mono[800]}    
                />
        </XStack>
    </YStack>
)}

