import { XStack, SizableText, Image,} from "tamagui";
import { Ionicons } from '@expo/vector-icons';
import { Button,  Adapt, Dialog, Sheet } from 'tamagui'

export function ModalWideActionBtns(props: {modeltitle: string,
                              modeltext: string,
                              btn1text: string,
                              btn2text: string,
                            alignment: string}) {
    return (
      <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>Show Modal With Wide Action Buttons</Button>
      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$2" gap="$4">
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="slow"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
        >
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
        {props.alignment=='left'?
        <>
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={65}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        justifyContent="flex-start"
        paddingTop={20}
        paddingLeft={20}
        paddingRight={10}

        >
          
         
        <XStack 
        flexDirection="row"
        alignItems='flex-start'
        justifyContent="flex-start"
        alignSelf='flex-start'
        gap={5}>
          <Ionicons name="checkmark-circle"  size={22} color="#2F9D83" />
          <SizableText
          paddingRight={10} 
          paddingLeft={10}
            fontFamily={'$heading'}
            paddingTop={1}
            lineHeight={25}
            flexWrap='wrap'
            size={'$lg'}
            color="$title-text" >{props.modeltitle}</SizableText>
        </XStack>
      </XStack>
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={80}
        paddingLeft={56}
        paddingRight={20}
        paddingBottom={16}>
          <SizableText 
          fontFamily={'$body'}
          size={'$md'}
          lineHeight={21}
          color="$supporting-text" >{props.modeltext}</SizableText>
        </XStack></>
      : props.alignment=='image'?
      <>
      <XStack flexDirection="row">
              <XStack
              backgroundColor={'$error-alert-fill'}
              width={300}
              height={64}
              borderTopLeftRadius={8}
              paddingTop={8}
              paddingBottom={8}
              flexDirection="row"
              justifyContent='center'>
                <XStack gap={12}
                  paddingTop={12}>
                    <Ionicons name="checkmark-circle"  size={22} color="#2F9D83" />
                    <SizableText 
                    fontFamily={'$heading'}
                    paddingTop={1}
                    lineHeight={25}
                    size={'$lg'}
                    color="$title-text" >{props.modeltitle}</SizableText>
                </XStack>
              </XStack>
              <XStack
              backgroundColor={'$error-alert-fill'}
              width={50}
              height={64}
              borderTopRightRadius={8}
              paddingTop={9}
              flexDirection="row"
              justifyContent='center'>
                <Dialog.Close displayWhenAdapted  asChild>
                <Button 
                width={60}
                height={40}>
                <Ionicons name="close-sharp" size={26} paddingTop={4}  color="#8F66D6" /></Button>
                </Dialog.Close>
              </XStack>
            </XStack>
            <XStack
            backgroundColor={'$error-alert-fill'}
            width={350}
            height={37}
            justifyContent="center"
            >
              <SizableText 
                fontFamily={'$body'}
                size={'$md'}
                lineHeight={21}
                color="$supporting-text" >{props.modeltext}</SizableText>
            </XStack>
            <XStack
            backgroundColor={'$error-alert-fill'}
            width={350}
            height={100}
            justifyContent="center">
              <Image
                  source={{
                      uri: require('../../media/images/mnet-image.png'),
                  }}
                  width={220}
                  height={98}
                  resizeMode={'contain'}
                  />
            </XStack></>
        :
        <>
      <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={85}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        justifyContent="flex-start"
        paddingTop={20}
        paddingLeft={20}
        paddingRight={10}

        >
          
      <XStack 
          flexDirection="row"
          alignItems='flex-start'
          justifyContent="flex-start"
          alignSelf='flex-start'
          gap={5}>
            <Ionicons name="checkmark-circle"  size={22} color="#2F9D83" />
            <SizableText
            padding={10} 
              fontFamily={'$heading'}
              paddingTop={1}
              lineHeight={25}
              flexWrap='wrap'
              size={'$lg'}
              color="$title-text" >{props.modeltitle}</SizableText>
          </XStack>
          </XStack>
      <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={80}
        paddingLeft={20}
        paddingRight={20}
        paddingBottom={16}>
           <SizableText 
            fontFamily={'$body'}
            size={'$md'}
            lineHeight={21}
            color="$supporting-text" >{props.modeltext}</SizableText>
        </XStack></>
      }
        
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
         <Dialog.Close displayWhenAdapted  asChild>
            <Button
            width={147}
            height={40}
            borderRadius={4}
            borderWidth={1}
            borderColor={"$secondary-button-border"}
            paddingTop={9}
            paddingBottom={8}
            paddingLeft={12}
            paddingRight={12}
            gap={6}
            textProps={{
              color:'$tertiary-default-text',
              alignSelf:'center',
              size:'$lg',
              lineHeight:16,
              fontFamily:'$btn'
            }}  
            >{props.btn1text}</Button>
            </Dialog.Close>
            <Button
            width={147}
            height={40}
            borderRadius={4}
            backgroundColor={"$primary-button-fill"}
            paddingTop={9}
            paddingBottom={8}
            paddingLeft={12}
            paddingRight={12}
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
        </Dialog.Content>
      </Dialog.Portal>
  </Dialog>
  )
}