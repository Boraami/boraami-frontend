import React, { useState } from "react";
import { SizableText,YStack, XStack,} from "tamagui";
import TabButtons, { TabButtonType } from "./TabButtons";

export enum CustomTab {
  Tab1,
  Tab2,
  Tab3,
}

const TabScreen = () => {
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);
  const buttons:TabButtonType[]=[
    {tabTitle:'Tab 1', size:'$xs', disabled: false, iconName:'heart',alignment:"IconLeft"},
    {tabTitle:'Tab 2',size:'$sm', disabled:false, alignment:'NoIcon'},
    {tabTitle:'Tab 3', size:'$md', disabled: false,iconName:'certificate', alignment:'IconRight'},
    {tabTitle:'Tab 4',size:'$lg', disabled:true, alignment:'NoIcon'},
  ]
  return (
    <YStack >
    <TabButtons 
    buttons={buttons} 
    selectedTab={selectedTab} 
    setSelectedTab={setSelectedTab}/>
    <XStack
    justifyContent="center">
    {selectedTab === CustomTab.Tab1 ? 
    <SizableText color={'$active-icon'}> Tab 1</SizableText>:selectedTab===CustomTab.Tab2?
    <SizableText color={'$active-icon'}> Tab 2</SizableText>:selectedTab===CustomTab.Tab3?
    <SizableText color={'$active-icon'}> Tab 3</SizableText>:
    <SizableText color={'$active-icon'}> Tab 4</SizableText>
    }
    </XStack>
    </YStack>
  );
};

export default TabScreen;