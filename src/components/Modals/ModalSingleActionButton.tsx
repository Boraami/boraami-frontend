import React from "react";
import { XStack, SizableText, Image, YStack, Stack, View } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Adapt, Dialog, Sheet } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import BtnField, { BtnFieldProps } from "../Button/Button";
import { useState } from "react";

type Props = {
  modeltitle: string;
  modeltext: string;
  btnText: string;
  closeBtnText: string;
  btnStyles: BtnFieldProps;
  handleAction?: (...args: any[]) => void; // since there could be any action attached to btn
};

const ModalWithSingleActionButton = ({
  modeltext,
  modeltitle,
  closeBtnText,
  btnStyles,
  handleAction,
}: Props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCloseBtn = () => {
    handleAction && handleAction();
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
            <YStack width={"100vw"} justifyContent="center" alignItems="center">
              <YStack width={350}>
                <Image
                  source={{
                    uri: require("../../assets/Modals/sitting1.png"),
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
                  paddingTop={28}
                  paddingBottom={20}
                  justifyContent="center"
                >
                  <XStack flexDirection="row" alignItems="center" justifyContent="center" gap={10}>
                    <Ionicons name="checkmark-circle" size={22} color="#2F9D83" />
                    <SizableText fontFamily={"$heading"} size={"$lg"} color="$title-text">
                      {modeltitle}
                    </SizableText>
                  </XStack>
                </XStack>
                <XStack
                  backgroundColor={"$error-alert-fill"}
                  paddingHorizontal={20}
                  paddingBottom={16}
                >
                  <SizableText fontFamily={"$body"} size={"$md"} color="$supporting-text">
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
                  paddingBottom={20}
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
            </YStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
};

export default ModalWithSingleActionButton;
