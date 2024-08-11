import React, { useState } from "react";
import { SizableText, Tabs, H5,TabsTabProps, TabLayout, styled, XStack, FontSizeTokens } from "tamagui";
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

const CustomTabGroup = ({icon, tabTitle, size, disabled}:Props) => {
    const [tabState, setTabState] = React.useState<{
      currentTab: string
      intentAt: TabLayout | null
      activeAt: TabLayout | null
      prevActiveAt: TabLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })
  
    const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
    const setIntentIndicator = (intentAt: TabLayout | null) => setTabState({ ...tabState, intentAt })
    const setActiveIndicator = (activeAt: TabLayout | null) =>
      setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
    const { activeAt, intentAt, prevActiveAt, currentTab } = tabState
  
  // 1 = right, 0 = nowhere, -1 = left
  const direction = (() => {
    if (!activeAt  || !prevActiveAt  || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }



  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const [active, setActive] = useState(false);
  const handleValueChange = () => {
    setActive(true)
  };
  return (
    <Tabs 
    defaultValue="tab1" 
    value={currentTab}
    onValueChange={setCurrentTab}
    orientation="horizontal"
    flexDirection="column"
    overflow="hidden">
    <Tabs.List space>
      <Tabs.Tab 
      value="tab1"
      disabled={disabled}
      onInteraction={handleOnInteraction}
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

export default CustomTabGroup;