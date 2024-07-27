import React from "react";
import { XStack, SizableText, Image, View, Stack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Button, Adapt, Dialog, Sheet } from "tamagui";
import { useState } from "react";
import BtnField, { BtnFieldProps } from "../Button/Button";
import { ImageSourcePropType } from "react-native";

type Props = {
  modeltitle: string;
  modeltext: string;
  btn1text: string;
  btn2text: string;
  closeBtnText: string;
  btnStyles: BtnFieldProps;
  imgSource: ImageSourcePropType;
  alignment: string;
  handleAction?: (...args: any[]) => void; // since there could be any action attached to btn
};
const ModalWideActionBtns = ({
  modeltext,
  modeltitle,
  btn1text,
  btn2text,
  alignment,
  imgSource,
  btnStyles,
  handleAction,
}: Props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCloseBtn = () => {
    setDialogOpen(false);
  };

  const handleActionPress = () => {
    setDialogOpen(false);
    handleAction && handleAction();
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
                    uri: require("../../assets/Modals/sitting1.png"),
                  }}
                  width={59}
                  height={51}
                  alignSelf="flex-end"
                />
                {alignment == "left" ? (
                  <>
                    <XStack
                      backgroundColor={"$error-alert-fill"}
                      width={350}
                      borderTopLeftRadius={8}
                      borderTopRightRadius={8}
                      paddingTop={28}
                      paddingBottom={20}
                      paddingLeft={20}
                      justifyContent="flex-start"
                    >
                      <XStack
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap={5}
                      >
                        <Ionicons name="checkmark-circle" size={22} color="#2F9D83" />
                        <SizableText
                          fontFamily={"$heading"}
                          size={"$md"}
                          color="$title-text"
                          paddingHorizontal={10}
                        >
                          {modeltitle}
                        </SizableText>
                      </XStack>
                    </XStack>
                    <XStack
                      backgroundColor={"$error-alert-fill"}
                      paddingHorizontal={22}
                      paddingBottom={16}
                    >
                      <SizableText fontFamily={"$body"} size={"$md"} color="$supporting-text">
                        {modeltext}
                      </SizableText>
                    </XStack>
                  </>
                ) : alignment == "image" ? (
                  <>
                    <XStack flexDirection="row">
                      <XStack
                        backgroundColor={"$error-alert-fill"}
                        width={300}
                        borderTopLeftRadius={8}
                        paddingVertical={12}
                        flexDirection="row"
                        justifyContent="center"
                      >
                        <XStack
                          gap={12}
                          paddingTop={12}
                          justifyContent="center"
                          alignItems="center"
                          paddingLeft={26}
                        >
                          <Ionicons name="checkmark-circle" size={22} color="#2F9D83" />
                          <SizableText fontFamily={"$heading"} size={"$md"} color="$title-text">
                            {modeltitle}
                          </SizableText>
                        </XStack>
                      </XStack>
                      <XStack
                        backgroundColor={"$error-alert-fill"}
                        width={50}
                        borderTopRightRadius={8}
                        flexDirection="row"
                        justifyContent="center"
                      >
                        <Dialog.Close displayWhenAdapted asChild>
                          <Button width={60} height={40}>
                            <Ionicons name="close-sharp" size={26} paddingTop={4} color="#8F66D6" />
                          </Button>
                        </Dialog.Close>
                      </XStack>
                    </XStack>
                    <XStack backgroundColor={"$error-alert-fill"} justifyContent="center">
                      <SizableText fontFamily={"$body"} size={"$md"} color="$supporting-text">
                        {modeltext}
                      </SizableText>
                    </XStack>
                    <XStack
                      backgroundColor={"$error-alert-fill"}
                      width={350}
                      paddingVertical={14}
                      justifyContent="center"
                    >
                      <Image source={imgSource} width={220} height={98} />
                    </XStack>
                  </>
                ) : null}
                <XStack
                  backgroundColor={"$error-alert-fill"}
                  borderBottomLeftRadius={8}
                  borderBottomRightRadius={8}
                  paddingTop={16}
                  paddingLeft={20}
                  paddingRight={20}
                  paddingBottom={20}
                >
                  <XStack justifyContent="space-between" width={"100%"}>
                    <BtnField
                      txt={btn1text}
                      size="lg"
                      name="dialog-close"
                      width="48%"
                      secondary="normal"
                      onPress={handleCloseBtn}
                    />
                    <BtnField
                      txt={btn2text}
                      size="lg"
                      name="dialog-close"
                      width="48%"
                      primary="normal"
                      onPress={handleActionPress}
                    />
                  </XStack>
                </XStack>
              </YStack>
            </Stack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
};

export default ModalWideActionBtns;
