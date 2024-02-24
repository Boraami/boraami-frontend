import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function SolInfoTag(props: {size: string,
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
    <XStack backgroundColor={'$info-solid-fill'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        height={btnH}
        width={btnW}
        backgroundColor={'$info-solid-fill'}
        borderRadius={4}
        icon={<MaterialCommunityIcons name="lightbulb" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        color={'$info-solid-text'}
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
import { MaterialCommunityIcons } from '@expo/vector-icons';

  const SolInfo = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$info-solid-fill", //serendipity[600]
    height: '$s-sm',
    width: '$s-sm',
    color: '$info-solid-text',
    icon: <MaterialCommunityIcons name="lightbulb" size={20} color="white" />
  })
  
  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolInfoTag = ({ onPress, text }: Props) => {
    return <SolInfo onPress={onPress}>{text}</SolInfo>;
  };
  */