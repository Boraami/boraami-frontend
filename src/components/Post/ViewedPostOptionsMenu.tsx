import React from "react";
import { YStack } from "tamagui";
import { MenuItem } from "../PopupMenu/PopupMenu";
import { Animated, Pressable } from "react-native";

type handleBtnAction = (...args: any[]) => void;

type MenuItemProps = {
  menuText: string;
  iconName?: string;
  iconComponent?: React.JSX.Element;
  handleAction?: handleBtnAction;
};

type MenuProps = {
  data: MenuItemProps[];
  hideMenu: () => void;
  menuAnimation: Animated.Value;
};

const ViewedPostOptionsMenu = ({ data, hideMenu, menuAnimation }: MenuProps) => {
  const handleBtnAction = (handleAction?: handleBtnAction) => {
    handleAction && handleAction();
  };
  return (
    <>
      <Pressable
        style={{ top: 0, bottom: 0, left: 0, right: 0, position: "absolute" }}
        onPress={hideMenu}
      />
      <Animated.View
        style={{
          position: "absolute",
          top: 85,
          right: 55,
          width: 115,
          height: 55,
          backgroundColor: "white",
          borderRadius: 4,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 100,
          opacity: menuAnimation,
          transform: [
            /*{
                  translateY: menuAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 5], 
                  }),
                }, //sliding animation */
            {
              scale: menuAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }, //scaling animation
          ],
        }}
      >
        <YStack
          width={140}
          height={55}
          backgroundColor="white"
          flexWrap="wrap"
          borderRadius={4}
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.3}
          shadowRadius={4}
          elevation={100}
        >
          <YStack>
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
          </YStack>
        </YStack>
      </Animated.View>
    </>
  );
};

export default ViewedPostOptionsMenu;
