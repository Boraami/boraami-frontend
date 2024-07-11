import { XStack, SizableText, Image, YStack, Stack, View } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Adapt, Dialog, Sheet } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { BtnField, BtnFieldProps } from "../Button/Button";
import { useState } from "react";
import { GestureResponderEvent } from "react-native";

type Props = {
  modeltitle: string;
  modeltext: string;
  btnText: string;
  closeBtnText: string;
  btnStyles: BtnFieldProps;
  onPress?: (...args: any[]) => void; // since there could be any action attached to btn
};

export function ModalWithSingleActionButton({
  modeltext,
  modeltitle,
  closeBtnText,
  btnStyles,
  onPress,
}: Props) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCloseBtn = () => {
    onPress && onPress();
    setDialogOpen(false);
  };

  return (
    <View>
      <BtnField {...btnStyles} onPress={() => setDialogOpen(true)} />
      <Dialog modal open={isDialogOpen} onOpenChange={setDialogOpen}>
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
            animateOnly={["transform", "opacity"]}
            animation={[
              "quick",
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
            <Stack width={"100vw"} justifyContent="center" alignItems="center">
              <YStack width={350}>
                <Image
                  source={{
                    uri: require("../../media/images/sitting1.png"),
                  }}
                  width={59}
                  height={51}
                  alignSelf="flex-end"
                />
                <XStack
                  backgroundColor={"$error-alert-fill"}
                  width={350}
                  borderTopLeftRadius={8}
                  borderTopRightRadius={8}
                  paddingVertical={28}
                  justifyContent="center"
                >
                  <XStack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                    gap={10}
                  >
                    <Ionicons name="checkmark-circle" size={22} color="#2F9D83" />
                    <SizableText
                      fontFamily={"$heading"}
                      paddingTop={1}
                      size={"$lg"}
                      color="$title-text"
                    >
                      {modeltitle}
                    </SizableText>
                  </XStack>
                </XStack>
                <XStack
                  backgroundColor={"$error-alert-fill"}
                  paddingHorizontal={20}
                  paddingBottom={16}
                >
                  <SizableText
                    fontFamily={"$body"}
                    size={"$md"}
                    lineHeight={21}
                    color="$supporting-text"
                  >
                    {modeltext}
                  </SizableText>
                </XStack>
                <XStack
                  backgroundColor={"$error-alert-fill"}
                  width={350}
                  height={72}
                  borderBottomLeftRadius={8}
                  borderBottomRightRadius={8}
                  paddingTop={16}
                  paddingLeft={20}
                  paddingRight={20}
                  paddingBottom={16}
                >
                  <BtnField
                    txt={closeBtnText}
                    size="lg"
                    name="dialog-close"
                    width="100%"
                    primary="normal"
                    iconFromParent={<FontAwesome name="heart" size={14} color="#F7F3FF" />}
                    onPress={handleCloseBtn}
                  />
                </XStack>
              </YStack>
            </Stack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
}
