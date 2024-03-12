import React, { useState } from 'react';
import { useColorScheme } from "react-native";
import { XStack, YStack, SizableText, Text  } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { colorScheme } from "../../themes/theme";

type Props = {
    shade: 'solid' | 'subtle' | 'outline',
    alert: string,
    content: string,
};

export const Long = ({ shade, alert, content }: Props) => {
    const [close, setClose] = useState(false);
    const theme = useColorScheme();
    let solid = shade === 'solid'
    let subtle = shade === 'subtle'

    const handleClose = () => {
    //   console.log("Button clicked, close alert");
      setClose(true);
    };
  
    if (close) {
      return null;
    }
  

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
                <AntDesign 
                    name={'heart'} 
                    size={14} 
                    color={theme === 'dark' && ( subtle ? colorScheme.boraami[700] : colorScheme.butter[50] ) || (theme === 'light' && solid ? colorScheme.butter[50] : colorScheme.boraami[700] )}    
                    paddingTop={6}/>
                <XStack width={250} flexDirection='column'>
                    {/* <Text 
                        fontFamily={ shade === 'subtle' ? '$btn' : '$heading'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={16} lineHeight={20}>{alert}</Text>
                    <Text 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={14}
                        >{content}</Text>    */}
                         <SizableText 
                        fontFamily={ shade === 'subtle' ? '$btn' : '$heading'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={16} lineHeight={20}>{alert}</SizableText>
                    <SizableText 
                        fontFamily={'$body'} 
                        color={ shade === 'solid' ? '$default-alert-solid-text' : shade === 'subtle' ? '$default-alert-subtle-text' : '$default-alert-outline-text'}
                        fontSize={14}
                        >{content}</SizableText>             
                </XStack>
            </XStack>
                <AntDesign 
                    name="close" 
                    size={18} 
                    paddingTop={10} 
                    paddingRight={12}
                    color={theme === 'dark' && ( subtle ? colorScheme.mono[800] : colorScheme.butter[50] ) || (theme === 'light' && solid ? colorScheme.butter[50] : colorScheme.mono[800] )}    
                    onPress={handleClose}/>
        </XStack>
    </YStack>
)}

