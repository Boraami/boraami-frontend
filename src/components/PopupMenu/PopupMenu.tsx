import React from "react";
import { Adapt, Button, Input, Label, Popover, SizableText, Text, XStack, YStack } from "tamagui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Icon from "../Icon/Icon";

type Props = {
  data: {
    menuText: string;
    iconName: string;
  }[];
  handleAction?: (...args: any[]) => void;
};

const PopupMenu = ({ data }: Props) => {
  return (
    <Popover placement="bottom" allowFlip>
      <Popover.Trigger asChild>
        <Button
          alignSelf="flex-start"
          justifyContent="flex-start"
          height={32}
          padding={4}
          icon={<SimpleLineIcons name="options-vertical" size={20} color="#8F66D6" />}
        />
      </Popover.Trigger>

      <Popover.Sheet modal>
        <Popover.Sheet.Frame />
        <Popover.Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
      </Popover.Sheet>

      <Popover.Content
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <XStack
          flexDirection="column"
          borderRadius={4}
          width={135}
          padding={10}
          gap={6}
          backgroundColor={"$overflow-bg-color"}
        >
          {data.map((item, i) => {
            {
              return (
                <Button
                  justifyContent="flex-start"
                  height={30}
                  alignItems="center"
                  padding={0}
                  key={`${item.menuText}-${i}`}
                  // onPress={() => someAction(`${item.menuText}`)}
                >
                  <XStack width={20} height={20} paddingTop={2}>
                    <Icon name={item.iconName} size={15} color="#F7F3FF" style={{}} />
                  </XStack>
                  <SizableText
                    // paddingTop={4}
                    fontFamily={"$btn"}
                    size={"$xs"}
                    // lineHeight={15}
                    color={"$text-icon-color"}
                  >
                    {item.menuText}
                  </SizableText>
                </Button>
              );
            }
          })}
        </XStack>
      </Popover.Content>
    </Popover>
  );
};

export default PopupMenu;
