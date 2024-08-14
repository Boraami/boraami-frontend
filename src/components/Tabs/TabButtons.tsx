import React from "react";
import { SizableText, YStack, XStack, FontSizeTokens, Button } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { ComponentProps } from "react";

type FontAwesomeIconName = ComponentProps<typeof FontAwesome>['name'];

export type TabButtonType = {
    iconName?: FontAwesomeIconName;
    tabTitle: string;
    size: FontSizeTokens;
    disabled: boolean;
    alignment: |"IconLeft"|"IconRight"|"NoIcon";
  };

type TabButtonProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number)=>void;
}

type TSize = {
    [key: string]: {
      textsize: number;
      iconsize: number;
      lh: number;
    };
};
  
const TabSize: TSize = {
    $xs: {
        textsize:12,
        iconsize:8,
        lh: 12,
    },
    $sm: {
        textsize:14,
        iconsize:10,
        lh: 14,

    },
    $md: {
        textsize:16,
        iconsize:12,
        lh: 16,

    },
    $lg: {
        textsize:18,
        iconsize:14,
        lh: 18,

    },
  };

const TabButtons = ({buttons,selectedTab,setSelectedTab,}:TabButtonProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const handlePress = (index:number) => {
    setSelectedTab(index);
  }

  return (
      <XStack 
      flexWrap="wrap">

        {buttons.map((button, index)=>{
          const colorText= button.disabled ? '$tab-disabled-text': 
          selectedTab === index  ?'$tab-active-text':'$tab-default-text'
          const colorIcon= button.disabled ? isDarkTheme?"#C9C3D4":"#3F374E" :
          selectedTab === index  ? isDarkTheme?"#B48BFF":"#5F3D9C" : isDarkTheme?"#C9C3D4":"#5F3D9C"
          const opacity= button.disabled? 0.5 : 1
          const activeBorderLine = selectedTab===index? 4:0
          const activeBorderColor = selectedTab===index?'$tab-active-line': 'transparent'
          
          return(
            <YStack
            key={index}
            marginHorizontal={5}
            >
            <XStack
            justifyContent='space-around'
            alignContent='space-around'>
            {button.alignment==="IconLeft"?
            <FontAwesome 
            name={button.iconName}
            size={TabSize[button.size].iconsize} 
            paddingTop={22}
            color={colorIcon}
            hoverStyle={{
              color:isDarkTheme?"#38BDF8":"#0284C7"
            }}
            focusStyle={{
              color:isDarkTheme?"#E0F2FE":"#4D455C"
            }}/>:null
          }
            <Button
            key={index}
            disabled={button.disabled}
            onPress={()=>handlePress(index)}
            opacity={opacity}
            paddingTop={10}
            paddingHorizontal={5}
            alignItems='center'
            focusable>
              <SizableText
              fontSize={TabSize[button.size].textsize}
              size={button.size}
              lineHeight={TabSize[button.size].lh}
              fontFamily="$btn"
              hoverStyle={{
                color:"$tab-hover-text"
              }}
              textAlign="left"
              focusStyle={{
                color:'$tab-focus-text',
              }}
              color={colorText}>
                {button.tabTitle}
              </SizableText>
              {button.alignment==='IconRight'?
              <FontAwesome 
              name={button.iconName}
              paddingBottom={2}
              size={TabSize[button.size].iconsize} 
              color={colorIcon}
              hoverStyle={{
                color:isDarkTheme?"#38BDF8":"#0284C7"
              }}
              focusStyle={{
                color:isDarkTheme?"#E0F2FE":"#4D455C"
              }}/>:null
            } 
            </Button></XStack>
            <XStack
             height= {activeBorderLine} // Height of the curved part
             backgroundColor= {activeBorderColor}
             borderTopLeftRadius= {4} 
             borderTopRightRadius= {4} />
            </YStack>
          )
        })}
      </XStack>
  );
};

export default TabButtons;
