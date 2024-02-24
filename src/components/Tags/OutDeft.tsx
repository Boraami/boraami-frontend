import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { Entypo } from '@expo/vector-icons';

export function OutDeftTag(props: { size: string,
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
    <XStack borderColor={'$default-outline-border'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        height={btnH}
        width={btnW}
        borderColor={'$default-outline-border'}
        borderRadius={4}
        icon={<Entypo name="heart" size={10} color="#744FB5"/>}
        ><Label size={size}
        fontFamily={'$body'}
        color={'$default-outline-text'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }