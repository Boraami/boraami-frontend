import { XStack, Text, Image, Separator,GetProps, styled, AlertDialog } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button,  YStack } from 'tamagui'

export const  ModalBox= styled(AlertDialog,{
  name: 'ModalBox',
    display:'flex',
    alignSelf:'center',
})
export type ModalBoxProps = GetProps<typeof ModalBox>

export function ModalWideActionBtns(props: {modeltitle: string,
                              modeltext: string,
                              btn1text: string,
                              btn2text: string}) {
    return (
      <ModalBox >
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
            lineHeight={30}
            fontWeight={"700"}
            fontFamily={'$heading'}
            fontSize={25}
            color="$title-text" >{props.modeltitle}</Text>
          </XStack>
        </XStack>

        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={90}
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
         <XStack gap={16}>
            <Button
            width={147}
            height={40}
            borderRadius={4}
            borderWidth={1}
            borderColor={"$secondary-button-border"}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={12}
            paddingRight={12}
            gap={6}
            textProps={{
              color:'$tertiary-default-text',
              alignSelf:'center',
              size:'$xl',
              lineHeight:16,
              fontFamily:'$btn'
            }}  
            >{props.btn1text}</Button>
            <Button
            width={147}
            height={40}
            borderRadius={4}
            backgroundColor={"$primary-button-fill"}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={12}
            paddingRight={12}
            gap={6}
            textProps={{
              color:'$boraami.50',
              alignSelf:'center',
              size:'$xl',
              lineHeight:16,
              fontFamily:'$btn'
            }}  
            >{props.btn2text}</Button>
          </XStack>
        </XStack>
      </XStack>
      </ModalBox>
    )
  }
  