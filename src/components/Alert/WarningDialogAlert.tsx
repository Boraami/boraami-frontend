import React, { useState } from "react";
import {
  XStack,
  YStack,
  View,
  SizableText,
  Separator,
  Button,
  Adapt,
  Dialog,
  Sheet,
} from "tamagui";
import { useColorScheme } from "react-native";
import { colorScheme } from "../../themes/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import BtnField, { BtnFieldProps } from "../Button/Button";

type Props = {
  title: string;
  dialogText: string;
  highlightedText: string;
  btnText: string;
  closeBtnText: string;
  btnStyles: BtnFieldProps;
  handleAction?: (...args: any[]) => void; // since there could be any action attached to btn
};

const WarningDialog = ({
  title,
  dialogText,
  highlightedText,
  btnText,
  closeBtnText,
  btnStyles,
  handleAction,
}: Props) => {
  const theme = useColorScheme();
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
            <XStack justifyContent="center" alignItems="center">
              <YStack
                backgroundColor={"$error-alert-fill"}
                borderColor={"$error-alert-outline"}
                style={{ color: "$error-alert-title-text" }}
                borderRadius={8}
                width={330}
                borderWidth={2}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: 12,
                    justifyContent: "space-between",
                  }}
                >
                  <SizableText
                    color="$error-alert-title-text"
                    fontFamily="$heading"
                    paddingTop={5}
                    paddingLeft={16}
                    fontSize={18}
                  >
                    {title}
                  </SizableText>
                  <Dialog.Close displayWhenAdapted asChild>
                    <Button>
                      <FontAwesome6
                        name="xmark"
                        size={24}
                        color={theme === "dark" ? colorScheme.butter[50] : colorScheme.boraami[700]}
                      />
                    </Button>
                  </Dialog.Close>
                </View>
                <Separator borderColor={"$error-alert-outline"} />
                <XStack style={{ width: "100%", padding: 16 }}>
                  <SizableText
                    fontFamily={"$body"}
                    fontSize={"$sm"}
                    color="$error-alert-title-text"
                    lineHeight={22}
                  >
                    {dialogText}

                    {highlightedText !== "" && (
                      <SizableText
                        color="$error-alert-highlighted-text"
                        fontFamily="$OpenSansBold"
                        fontSize={"$sm"}
                      >
                        {" "}
                        {highlightedText}
                      </SizableText>
                    )}
                  </SizableText>
                </XStack>
                <Separator borderColor={"$error-alert-outline"} />
                <XStack
                  justifyContent="flex-end"
                  borderBottomLeftRadius={8}
                  borderBottomRightRadius={8}
                  paddingVertical={16}
                  paddingHorizontal={20}
                >
                  <XStack justifyContent="flex-end" width={"100%"} gap={6}>
                    <BtnField
                      txt={closeBtnText}
                      size="lg"
                      fontSize={"$sm"}
                      name="dialog-close"
                      maxWidth="48%"
                      tertiary="normal"
                      btnTextStyles={{ color: "$default-alert-outline-text" }}
                      onPress={handleCloseBtn}
                    />
                    <BtnField
                      txt={btnText}
                      size="lg"
                      name="dialog-close"
                      maxWidth="48%"
                      primary="normal"
                      onPress={handleActionPress}
                    />
                  </XStack>
                </XStack>
              </YStack>
            </XStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
};

export default WarningDialog;
