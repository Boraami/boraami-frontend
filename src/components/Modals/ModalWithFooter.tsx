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

export function ModalWithFooter(props: {modeltitle: string,
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
        height={56}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        paddingTop={8}
        paddingBottom={8}
        paddingLeft={20}
        paddingRight={30}
        flexDirection="row"
        justifyContent='space-between'
        >
          <XStack gap={8} paddingTop={12} >
            <FontAwesome6 name="check-circle" size={18} color="#2F9D83" />
            <Text 
            lineHeight={25}
            fontWeight={"700"}
            fontFamily={'$heading'}
            fontSize={20}
            color="$title-text" >{props.modeltitle}</Text>
          </XStack>
          <YStack paddingTop={10} >
            <FontAwesome name="close" size={20}  color="#8F66D6" />
          </YStack>
        </XStack>
        <Separator borderColor={"$modal-divider"}/>
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={95}
        padding={16}
        >
          <Text 
            lineHeight={21}
            fontWeight={"400"}
            fontFamily={'$body'}
            fontSize={14}
            color="$title-text" 
            >{props.modeltext}</Text>

        </XStack>
        <Separator borderColor={"$modal-divider"}/>

        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={72}
        justifyContent='flex-end'
        padding={16}
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
        >
          <XStack gap={16}>
            <Button
            width={82}
            height={40}
            borderRadius={4}
            borderColor={"$secondary-button-border"}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
            gap={6}
            textProps={{
              color:'$tertiary-default-text',
              alignSelf:'center',
              size:'$lg',
              lineHeight:16,
              fontFamily:'$btn'
            }}  
            >{props.btn1text}</Button>
            <Button
            width={77}
            height={40}
            borderRadius={4}
            backgroundColor={"$primary-button-fill"}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
            gap={6}
            textProps={{
              color:'$boraami.50',
              alignSelf:'center',
              size:'$lg',
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
  