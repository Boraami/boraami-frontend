import React, { useState } from 'react'
import { TabsContentProps, View, Button, FontSizeTokens, SizableText, XStack, YStack } from 'tamagui';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    text: string,
    defaultValue: string,
    disabled?: boolean,
    // tabs: 
}

type TagSizeProps = {
    [key: string]: {
      iconSize: number;
      textSize: FontSizeTokens;
      width: number;
      height: number;
    };
  };

// Default, Disabled, Hover 
// :active - when the element is currenty activated by the user 
// :focus - when the element is currently highlighted/selected 

const tabSizes: TagSizeProps = {
    xm: {
        textSize: '$xs',
        iconSize: 8,
        width: 72,
        height: 22, 
    },
    s: {
        textSize: '$sm',
        iconSize: 12,
        width: 95,
        height: 34, 
    },
    md: {
        textSize: '$md',
        iconSize: 16,
        width: 117,
        height: 52, 
    },
    lg: {
        textSize: '$lg',
        iconSize: 20,
        width: 148,
        height: 20, 
    }
}

const Tabs = ({ text, defaultValue, disabled }: Props) => {
    const [tabIndex, setTabIndex] = useState(0);
    // const tab = tabs[tabIndex]

  return (
    <View>
        <Tabs 
            defaultValue={defaultValue} 
            disabled={disabled} 
            text={text}
            // orientation="horizontal" 
            // flexDirection="column" 
            // width={TabSizes[size].width}
            // height={TabSizes[size].height}
            />
        {text}
      <FontAwesome name="heart" size={24} color="black" />
      
      {/* <Button size="$2" onPress={() => 
        setTabIndex((x) => (x + 1) % tabs.length)
        }> */}
        <Button>
          {/* {demosTitle[demo]} */}
        </Button>
    </View>
  )
}

export default Tabs
