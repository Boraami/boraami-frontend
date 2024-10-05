import React from "react";
import {YStack, } from "tamagui";
import { MenuItem } from "../PopupMenu/PopupMenu";

type handleBtnAction = (...args: any[]) => void;

type MenuItemProps = {
  menuText: string;
  iconName?: string;
  iconComponent?: React.JSX.Element;
  handleAction?: handleBtnAction;
};

type MenuProps = {
  data: MenuItemProps[];
};

const ViewedPostOptionsMenu = ({ data }: MenuProps) => {
  const handleBtnAction = (handleAction?: handleBtnAction) => {
    handleAction && handleAction();
  };
  return (
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
  );
};

export default ViewedPostOptionsMenu;
