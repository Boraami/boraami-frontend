import React, { useState } from "react";
import { SizableText, Tabs, H5, styled, XStack, FontSizeTokens } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

type Props = {
    icon: React.JSX.Element;
    tabTitle: string;
    size: FontSizeTokens;
    disabled: boolean;
  };
type TSize = {
    [key: string]: {
      textsize: number;
      iconsize: number;
      lh: number;
    };
  };
  
const TabSize: TSize = {
    xs: {
        textsize:12,
        iconsize:8,
        lh: 12,
    },
    sm: {
        textsize:14,
        iconsize:10,
        lh: 14,

    },
    md: {
        textsize:16,
        iconsize:12,
        lh: 16,

    },
    lg: {
        textsize:18,
        iconsize:14,
        lh: 18,

    },
  };

const CustomTab = ({icon, tabTitle, size, disabled}:Props) => {

  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const [tapped, setTapped] = useState(false);
  const [active, setActive] = useState(false);

  const handlePress = () => {
    setTapped(true)
  };
  const handleValueChange = () => {
    setActive(true)
  };
  return (
    <Tabs 
    defaultValue="tab1" 
    orientation="horizontal"
    flexDirection="column"
    overflow="hidden"
    onValueChange={handleValueChange}>
    <Tabs.List space>
      <Tabs.Tab 
      value="tab1"
      disabled={disabled}
      active={active}
      onBlur={()=>setActive(false)}
      >
        <SizableText
        fontSize={TabSize[size].textsize}
        size={size}
        lineHeight={TabSize[size].lh}
        fontFamily="$btn"
        color={disabled ? '$tab-disabled-text': active ?'$tab-active-text':'$tab-default-text'} 
        paddingLeft={10}
        paddingRight={10}
        paddingTop={15}
        hoverStyle={{
          color:"$tab-hover-text"
        }}
        focusStyle={{
          color:'$tab-focus-text',
        }}
        >{tabTitle}</SizableText>
        <FontAwesome 
        name="heart"
        paddingTop={10}
        size={TabSize[size].iconsize} 
        color={disabled? isDarkTheme?"#C9C3D4":"#3F374E" : isDarkTheme?"#C9C3D4":"#5F3D9C"}
        hoverStyle={{
          color:isDarkTheme?"#38BDF8":"#0284C7"
        }}
        focusStyle={{
          color:isDarkTheme?"#E0F2FE":"#4D455C"
        }}/>
      </Tabs.Tab>
      <Tabs.Tab value="tab2">
        <SizableText>Tab 2</SizableText>
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Content value="tab1">
      <H5>Tab 1</H5>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      <H5>Tab 2</H5>
    </Tabs.Content>
  </Tabs>
  );
};

export default CustomTab;