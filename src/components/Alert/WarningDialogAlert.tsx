import {
  XStack, YStack, View,
  SizableText, Separator,
  Button, Adapt, Dialog, Sheet
} from "tamagui";
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";
import { AntDesign } from '@expo/vector-icons';

type Props = {
  title: string,
  name: string,
}

export const WarningDialog = ({ title, name }: Props) => {
  const theme = useColorScheme();

  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button color='$error-alert-title-text'>Show Warning Dialog</Button>
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

          <XStack justifyContent="center" alignItems="center">
            <YStack backgroundColor={'$error-alert-fill'}
            borderColor={'$error-alert-outline'}
            style={{ color: '$error-alert-title-text' }}
            borderRadius={8}
            width={330}
            borderWidth={2}>
              <View style={{ flexDirection: 'row',
              paddingVertical: 12,
              justifyContent: 'space-between' }}>
                <SizableText color='$error-alert-title-text'
                fontFamily='$heading' paddingTop={5}
                paddingLeft={16}
                fontSize={18}>{title}</SizableText>
                <Dialog.Close displayWhenAdapted asChild>
                  <Button>
                    <AntDesign name="close" size={24}
                      color={theme === 'dark' ? colorScheme.butter[50] : colorScheme.boraami[700]}
                    />
                  </Button>
                </Dialog.Close>
              </View>
              <Separator borderColor={'$error-alert-outline'} />
              <XStack style={{ width: '100%', padding: 16 }}>
              <SizableText lineHeight={22}
              color='$error-alert-title-text' fontSize={14}>
                  This will remove all data relating to {name}. This action cannot be reversed.
                  <SizableText color='$error-alert-highlighted-text'
                  fontFamily="$OpenSansBold"
                  fontSize={14}> Deleted data cannot be recovered</SizableText>.
                </SizableText>
              </XStack>
              <Separator borderColor={'$error-alert-outline'} />
              <XStack justifyContent='flex-end'>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Dialog.Close displayWhenAdapted asChild>
                    <Button
                      style={{ color: '$error-alert-title-text' }}
                      fontFamily={'$btn'}
                      fontSize={16}>Cancel
                    </Button>
                  </Dialog.Close>
                  <Button
                    style={{ color: '$butter.50' }}
                    fontFamily={'$btn'}
                    fontSize={14}
                    height={40}
                    margin={10}
                    alignItems='center'
                    backgroundColor={'$default-alert-solid-fill'}
                    borderRadius={4}
                  >I understand. Delete.
                  </Button>
                </View>
              </XStack>
            </YStack>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
