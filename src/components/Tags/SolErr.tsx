import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { FontAwesome6 } from '@expo/vector-icons';

export function SolErrTag(props: {size: string,
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
    <XStack backgroundColor={'$error-solid-fill'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        height={btnH}
        width={btnW}
        backgroundColor={'$error-solid-fill'}
        borderRadius={4}
        icon={<FontAwesome6 name="triangle-exclamation" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        color={'$error-solid-text'}
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

  const SolErr = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$error-solid-fill", //bwl[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$error-solid-text',
    icon: <FontAwesome6 name="triangle-exclamation" size={24} color="white" />
  })

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolErrTag = ({ onPress, text }: Props) => {
    return <SolErr onPress={onPress}>{text}</SolErr>;
  };*/
  