import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { Entypo } from '@expo/vector-icons';

export function SolDeftTag(props: {size: string,
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
    <XStack backgroundColor={'$default-solid-fill'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        gap={-2}
        height={btnH}
        width={btnW + 30}
        backgroundColor={'$default-solid-fill'}
        borderRadius={4}
        icon={<Entypo name="heart" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        fontWeight={"bold"}
        color={'$default-solid-text'}
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }