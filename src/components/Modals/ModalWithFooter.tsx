import { XStack, SizableText, Image, YStack, Separator, View } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Button, Adapt, Dialog, Sheet } from "tamagui";
import { BtnField, BtnFieldProps } from "../Button/Button";
import { useState } from "react";
type Props = {
  modeltitle: string;
  modeltext: string;
  btn1text: string;
  btn2text: string;
  btnStyles: BtnFieldProps;
  handleAction?: (...args: any[]) => void; // since there could be any action attached to btn
};
export function ModalWithFooter({
  modeltext,
  modeltitle,
  btn1text,
  btn2text,
  btnStyles,
  handleAction,
}: Props) {
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
                    uri: require("../../media/images/sitting1.png"),
                  }}
                  width={59}
                  height={51}
                  alignSelf="flex-end"
                />
                <XStack flexDirection="column">
                  <XStack
                    backgroundColor={"$error-alert-fill"}
                    width={350}
                    borderTopLeftRadius={8}
                    borderTopRightRadius={8}
                    paddingTop={12}
                    paddingBottom={8}
                    paddingLeft={15}
                    paddingRight={10}
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <XStack gap={8} justifyContent="center" alignItems="center">
                      <Ionicons
                        name="checkmark-circle"
                        size={22} //22
                        color="#2F9D83"
                      />
                      <SizableText
                        fontFamily={"$heading"}
                        size={"$md"} //lg
                        color="$title-text"
                      >
                        {modeltitle}
                      </SizableText>
                    </XStack>
                    <YStack>
                      <Dialog.Close displayWhenAdapted asChild>
                        <Button width={60} height={40}>
                          <Ionicons
                            name="close-sharp"
                            size={26}
                            color="#8F66D6" //size=26
                          />
                        </Button>
                      </Dialog.Close>
                    </YStack>
                  </XStack>
                </XStack>
                <Separator borderColor={"$modal-divider"} />
                <XStack backgroundColor={"$error-alert-fill"} padding={16}>
                  <SizableText
                    fontFamily={"$body"}
                    size={"$sm"} //md
                    color="$title-text"
                  >
                    {modeltext}
                  </SizableText>
                </XStack>
                <Separator borderColor={"$modal-divider"} />
                <XStack
                  backgroundColor={"$error-alert-fill"}
                  height={72}
                  justifyContent="flex-end"
                  padding={16}
                  borderBottomLeftRadius={8}
                  borderBottomRightRadius={8}
                >
                  <XStack justifyContent="flex-end" gap={20} width={"100%"} alignItems="center">
                    <BtnField
                      txt={btn1text}
                      size="lg"
                      name="dialog-close"
                      secondary="normal"
                      onPress={handleCloseBtn}
                    />
                    <BtnField
                      txt={btn2text}
                      size="lg"
                      name="dialog-close"
                      primary="normal"
                      onPress={handleActionPress}
                    />
                  </XStack>
                </XStack>
              </YStack>
            </YStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  );
}
