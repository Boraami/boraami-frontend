import { XStack, Text, Label, SizableText } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

export function OverflowMenu(){
    return(
        <XStack 
        gap={11} 
        flexDirection="column" 
        borderRadius={4} 
        paddingLeft={16}
        paddingRight={16}
        paddingTop={8}
        paddingBottom={8} 
        backgroundColor={"$overflow-bg-color"}>
           
            <XStack alignItems='center' gap={8}>
                <FontAwesome6 name="flag"  size={7} color="#F7F3FF" />
                <SizableText
                 paddingTop={4}
                 fontFamily={'$btn'}
                 fontSize={'$xs'}
                 lineHeight={12}
                 color={'$text-icon-color'}
                 >Report</SizableText>
            </XStack>

            <XStack alignItems='center'  gap={6}>
                <FontAwesome6 name="bell-slash" color="#F7F3FF" size={7} />
                <SizableText
                 paddingTop={4}
                 fontFamily={'$btn'}
                 fontSize={'$xs'}
                 lineHeight={12}
                 color={'$text-icon-color'}
                 >Mute user</SizableText>

            </XStack>

            <XStack alignItems='center'  gap={6}>
                <FontAwesome6 name="user-slash" color="#F7F3FF"size={7} />
                <SizableText
                 paddingTop={4}
                 fontFamily={'$btn'}
                 fontSize={'$xs'}
                 lineHeight={12}
                 color={'$text-icon-color'}
                 >Block user</SizableText>

            </XStack>
        </XStack>
    )
}