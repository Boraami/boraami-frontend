import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

export function SolWarnTag(props: {size: string,
                                labeltxt: string}) {
  var btnH=0;
  var btnW=0;
  var size='';
  if (props.size == 'sm') {
    btnH=20
    btnW=74
    size='$sm'
  } else if (props.size == 'md') {
    btnH=24
    btnW=82
    size='$md'
  } else {
    console.log('incorrect size args')
  }
  return (
    <XStack backgroundColor={'$warning-solid-fill'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        height={btnH}
        width={btnW}
        backgroundColor={'$warning-solid-fill'}
        borderRadius={4}
        icon={<FontAwesome6 name="triangle-exclamation" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        color={'$warning-solid-text'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }
  /*import React from "react";
import { GestureResponderEvent} from "react-native";
import { Button, H1, styled, Text, View } from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

  const SolWarn = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$warning-solid-fill", //ptd[400]
    height: '$s-sm',
    width: '$s-sm',
    color: '$warning-solid-tex',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })
 
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolWarnTag = ({ onPress, text }: Props) => {
    return <SolWarn onPress={onPress}>{text}</SolWarn>;
  };
  */