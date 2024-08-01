import React, { useState } from "react";
import { Platform, useColorScheme } from "react-native";
import { Adapt, Button, Popover, Separator, SizableText, XStack } from "tamagui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Icon from "../Icon/Icon";
import { colorScheme } from "../../themes/theme";
import Divider from "../Divider/Divider";

type handleBtnAction = (...args: any[]) => void;

type MenuItemProps = {
  menuText: string;
  iconName?: string;
  iconComponent?: React.JSX.Element;
  handleAction?: handleBtnAction;
};

type MenuProps = {
  data: MenuItemProps[];
  sheetHeightPerc: number;
  title?: string;
  offsetX: number;
};

type MenuItemComponentProps = {
  data: MenuItemProps;
  handleBtnAction: handleBtnAction;
};

// This can be changed to breakpoints once we have them and if tamagui allows- doesnt look possible as of now so
const isWeb = Platform.OS === "web";

const MenuItem = ({ data, handleBtnAction }: MenuItemComponentProps) => {
  const [isBtnPressed, setBtnPressed] = useState(false);
  const { iconComponent, menuText } = data;
  const theme = useColorScheme();

  const btnPressedColor = theme === "dark" ? colorScheme.boraami[300] : colorScheme.boraami[500];

  return (
    <Button
      justifyContent="flex-start"
      height={isWeb ? 40 : "max-content"}
      hoverStyle={{ backgroundColor: "$hover-state-bg" }}
      alignItems="center"
      backgroundColor={isBtnPressed ? "$pressed-state-bg" : "$overflow-bg-color"}
      padding={isWeb ? 0 : 16}
      paddingHorizontal={16}
      onPress={() => handleBtnAction(data?.handleAction)}
      onPressIn={() => setBtnPressed(true)}
      onPressOut={() => setBtnPressed(false)}
      // for web hover can use active state for style change specifically in icon color change since its not doable from tamagui
      onHoverIn={() => setBtnPressed(true)}
      onHoverOut={() => setBtnPressed(false)}
    >
      {data?.iconComponent ? (
        <XStack width={24} height={24} paddingTop={2}>
          {iconComponent}
        </XStack>
      ) : data?.iconName ? (
        <XStack width={24} height={24} paddingTop={2}>
          <Icon
            name={data?.iconName}
            size={20}
            color={isBtnPressed ? btnPressedColor : "#8F66D6"}
          />
        </XStack>
      ) : null}
      <SizableText fontFamily={"$btn"} size={"$md"} color={"$default-state-text"}>
        {menuText}
      </SizableText>
    </Button>
  );
};

const PopupMenu = ({ data, title, sheetHeightPerc, offsetX }: MenuProps) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleBtnAction = (handleAction?: handleBtnAction) => {
    setPopupOpen(false);
    handleAction && handleAction();
  };

  return (
    <Popover
      placement="bottom"
      allowFlip
      offset={{ crossAxis: offsetX }}
      open={isPopupOpen}
      onOpenChange={setPopupOpen}
    >
      <Popover.Trigger asChild>
        <Button
          alignSelf="flex-start"
          justifyContent="flex-start"
          height={32}
          padding={4}
          icon={<SimpleLineIcons name="options-vertical" size={20} color="#8F66D6" />}
        />
      </Popover.Trigger>
      <Adapt when="sm" platform="touch">
        <Popover.Sheet
          modal
          dismissOnSnapToBottom
          dismissOnOverlayPress
          snapPoints={[sheetHeightPerc]}
        >
          <Popover.Sheet.Overlay
            backgroundColor={"#B48BFF33"}
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <Popover.Sheet.Frame backgroundColor={"$overflow-bg-color"}>
            <Adapt.Contents />
          </Popover.Sheet.Frame>
        </Popover.Sheet>
      </Adapt>

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
          borderRadius={isWeb ? 4 : 0}
          width={isWeb ? 200 : "100%"}
          paddingVertical={10}
          paddingHorizontal={0}
          gap={isWeb ? 6 : 0}
          backgroundColor={"$overflow-bg-color"}
        >
          {isWeb ? null : (
            <Divider
              borderColor="$boraami.500"
              borderWidth={2}
              marginBottom={16}
              width={74}
              borderRadius={"$r-strong"}
              alignSelf="center"
            />
          )}
          {title && (
            <SizableText
              color="$popup-sheet-title"
              fontFamily="$body"
              fontSize={"$md"}
              padding={10}
              paddingHorizontal={16}
            >
              {title}
            </SizableText>
          )}
          {data.map((item, i) => {
            {
              return (
                <MenuItem
                  key={`${item.menuText}-${i}`}
                  data={item}
                  handleBtnAction={handleBtnAction}
                />
              );
            }
          })}
        </XStack>
      </Popover.Content>
    </Popover>
  );
};

export default PopupMenu;
