import { XStack, SizableText, Image,} from "tamagui";
import { Ionicons } from '@expo/vector-icons';
import { Button,  Adapt, Dialog, Sheet } from 'tamagui'
import {FontAwesome } from '@expo/vector-icons'
type Props = {
  modeltitle: string
  modeltext: string, 
  btntext: string
}
export function ModalWithSingleActionButton({ modeltext, modeltitle, btntext }: Props) {
    return (
      <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>Show Modal With Single Action Button</Button>
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
              flexDirection="row"
              alignItems='center'
              justifyContent="center"
              alignSelf="center"
              gap={10}>
             <Ionicons name="checkmark-circle"  size={22} color="#2F9D83" />
              <SizableText 
              fontFamily={'$heading'}
              paddingTop={1}
              lineHeight={25}
              size={'$lg'}
              color="$title-text" >{modeltitle}</SizableText>
          </XStack>
        </XStack>
        <XStack
        backgroundColor={'$error-alert-fill'}
        width={350}
        height={70}
        paddingLeft={20}
        paddingRight={20}
        paddingBottom={16}>
           <SizableText 
            fontFamily={'$body'}
            size={'$md'}
            lineHeight={21}
            color="$supporting-text" >{modeltext}</SizableText>
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
          <Dialog.Close displayWhenAdapted  asChild>
          <Button
            width={310}
            height={40}
            borderRadius={4}
            paddingTop={3}
            backgroundColor={"$primary-button-fill"}
            justifyContent='center'
            alignItems='center'
            gap={-4}
          >
          <SizableText
          color='$boraami.50'
          size='$lg'
          lineHeight={22}
          fontFamily='$btn'
          >{btntext}</SizableText>
          <FontAwesome name="heart" size={14} paddingBottom={3} color="#F7F3FF" /></Button>
          </Dialog.Close>
        </XStack>
        </XStack>
        </Dialog.Content>
      </Dialog.Portal>
  </Dialog>
    )
  }
  