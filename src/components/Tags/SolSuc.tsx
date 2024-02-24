import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

export function SolSucTag(props: {size: string,
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
    <XStack backgroundColor={'$success-solid-fill'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        height={btnH}
        width={btnW}
        backgroundColor={'$success-solid-fill'}
        borderRadius={4}
        icon={<AntDesign name="check" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        color={'$success-solid-text'}
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
import { AntDesign } from '@expo/vector-icons';


  const SolSuc = styled(Button, {
    theme: 'light',
    name: "solid info",
    borderRadius: "$r-subtle",
    alignSelf: 'flex-start',
    backgroundColor: "$success-solid-fill", //singularity[500]
    height: '$s-sm',
    width: '$s-sm',
    color: '$success-solid-text',
    icon: <AntDesign name="check" size={24} color="white" />
  })

  type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
  };
  
  export const SolSucTag = ({ onPress, text }: Props) => {
    return <SolSuc onPress={onPress}>{text}</SolSuc>;
  };
  */