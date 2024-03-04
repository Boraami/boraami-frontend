import { XStack, SizableText, Image, YStack, Separator} from "tamagui";
import { Ionicons } from '@expo/vector-icons';
import { Button,  Adapt, Dialog, Sheet } from 'tamagui'

export function ModalWithFooter(props: {modeltitle: string,
                              modeltext: string,
                              btn1text: string,
                              btn2text: string}) {
    return (
      <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>Show Modal With Footer</Button>
      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$2">
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
            <XStack
            backgroundColor={'$error-alert-fill'}
            width={350}
            height={56}
            borderTopLeftRadius={8}
            borderTopRightRadius={8}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={15}
            paddingRight={10}
            flexDirection="row"
            justifyContent='space-between'
            >
            <XStack gap={8} paddingTop={12} >
            <Ionicons name="checkmark-circle"  size={20}//22
             color="#2F9D83" />
            <SizableText 
              fontFamily={'$heading'}
              paddingTop={1}
              lineHeight={25}
              size={'$md'}//lg
              color="$title-text" >{props.modeltitle}</SizableText>
            </XStack>
            <YStack paddingTop={3} >
              <Dialog.Close displayWhenAdapted  asChild>
              <Button 
                  width={60}
                  height={40}>
              <Ionicons name="close-sharp" size={16}   color="#8F66D6" //size=26
               /></Button>
              </Dialog.Close>          
          </YStack>
          </XStack>
        </XStack>
        <Separator borderColor={"$modal-divider"}/>
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={95}
        padding={16}
        >
          <SizableText 
            fontFamily={'$body'}
            size={'$sm'}//md
            lineHeight={21}
            color="$title-text" >{props.modeltext}</SizableText>
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
        <Dialog.Close displayWhenAdapted  asChild>
            <Button
            width={82}
            height={40}
            borderRadius={4}
            borderColor={"$secondary-button-border"}
            paddingTop={9}
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
            gap={6}
            textProps={{
              color:'$tertiary-default-text',
              alignSelf:'center',
              size:'$md',//lg
              lineHeight:16,
              fontFamily:'$btn'
            }}  
            >{props.btn1text}</Button>
            </Dialog.Close>
            <Button
            width={77}
            height={40}
            borderRadius={4}
            backgroundColor={"$primary-button-fill"}
            paddingTop={9}
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
            gap={6}
            textProps={{
              color:'$boraami.50',
              alignSelf:'center',
              size:'$md',//lg
              lineHeight:16,
              fontFamily:'$btn'
            }}  
            >{props.btn2text}</Button>
          </XStack>
        </XStack>
        </Dialog.Content>
      </Dialog.Portal>
  </Dialog>
  )
}