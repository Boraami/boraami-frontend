import { XStack, Text, Image, Separator,GetProps, styled, AlertDialog } from "tamagui";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import { Button,  YStack } from 'tamagui'

export const  ModalBox= styled(AlertDialog,{
  name: 'ModalBox',
    display:'flex',
    alignSelf:'center',
})
export type ModalBoxProps = GetProps<typeof ModalBox>


export function ModalWithSingleActionButton(props: {modeltitle: string,
                              modeltext: string,
                              btntext: string,}) {
    return (<ModalBox >
      <XStack
      flexDirection="column">
        <Image
          source={{
                  uri: require('../../media/images/sitting1.png'),
          }}
          width={59}
          height={51}
          resizeMode={'contain'}
          alignSelf='flex-end'
        />
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={113}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        padding={16}
        justifyContent="center"
        >
          <XStack 
          flexDirection="column"
          alignItems='center'
          justifyContent="center"
          alignSelf="center"
          gap={20}>
            <FontAwesome6 name="check-circle" size={20} color="#2F9D83" />
            <Text 
            lineHeight={26}
            fontWeight={"700"}
            fontFamily={'$heading'}
            fontSize={22}
            color="$title-text" >{props.modeltitle}</Text>
          </XStack>
        </XStack>
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={70}
        paddingLeft={20}
        paddingRight={20}
        paddingBottom={16}>
          <Text 
            lineHeight={23}
            fontWeight={"400"}
            fontFamily={'$body'}
            fontSize={16}
            color="$supporting-text" 
            >{props.modeltext}</Text>
        </XStack>
        <XStack
          backgroundColor={'$error-alert-fill'}
          width={350}
          height={72}
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
          paddingTop={16}
          paddingLeft={20}
          paddingRight={20}
          paddingBottom={16}>
          <Button
            width={310}
            height={40}
            borderRadius={4}
            paddingTop={3}
            backgroundColor={"$primary-button-fill"}
            justifyContent='center'
            alignItems='center'
          >
          <Text
          color='$boraami.50'
          fontSize='$xl'
          lineHeight={22}
          fontFamily='$btn'
          >{props.btntext}</Text>
          <FontAwesome name="heart" size={14} paddingBottom={3} color="#F7F3FF" /></Button>
        </XStack>
      </XStack>
      </ModalBox>
    )
  }
  