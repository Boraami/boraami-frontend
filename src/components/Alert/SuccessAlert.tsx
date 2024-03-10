import React from 'react';
import { useColorScheme } from "react-native";
import { XStack, YStack, SizableText, Text } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { colorScheme } from "../../themes/theme";

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
    alert: string
};

export const Success = ({ shade, alert }: Props) => {
    const theme = useColorScheme();
    let solid = shade === 'solid'
    let subtle = shade === 'subtle'
    let outline = shade === 'outline'

    return (
        <YStack>
            <XStack style={{ height: 48, width: 330, borderRadius: 4, alignItems:'center' }}
                backgroundColor={ shade === 'solid' ? '$success-alert-solid-fill' : shade === 'subtle' ? '$success-alert-subtle-fill' : '$success-alert-outline-fill'}
                borderColor={ shade === 'solid' ? '$success-alert-solid-fill' : shade === 'subtle' ? '$success-alert-subtle-fill' : '$success-alert-outline'}
                borderWidth={1} 
            >
            <XStack flexDirection={'row'} width={300} height={21} justifyContent={'space-evenly'}> 
                 <AntDesign
                    name={'checkcircle'} 
                    paddingHorizontal={12} 
                    size={14} 
                    color={
                        theme === 'dark' && solid ? colorScheme.butter[50] :
                        theme === 'dark' && subtle ? colorScheme.singularity[500] :
                        theme === 'dark' && outline ? colorScheme.singularity[200] :
                        theme === 'light' && solid ? colorScheme.butter[50] :
                        colorScheme.singularity[500]
                    }
                    paddingTop={4}
                />

                <XStack width={250} flexDirection='column'>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$success-alert-solid-text' : shade === 'subtle' ? '$success-alert-subtle-text' : '$success-alert-outline-text'}
                        fontSize={14}>{alert}
                    </Text>        
                </XStack>
            </XStack>
                <AntDesign 
                    name="close" 
                    size={16} 
                    color={
                        theme === 'dark' && solid ? colorScheme.butter[50] :
                        theme === 'dark' && subtle ? colorScheme.mono[800] :
                        theme === 'dark' && outline ? colorScheme.singularity[200] :
                        theme === 'light' && solid ? colorScheme.butter[50] :
                        colorScheme.mono[800]
                    }
                    />
             </XStack>
    </YStack>
)}

