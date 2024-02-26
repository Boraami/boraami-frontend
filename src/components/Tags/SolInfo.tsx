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
        gap={-2}
        height={btnH}
        width={btnW}
        backgroundColor={'$info-solid-fill'}
        borderRadius={4}
        icon={<MaterialCommunityIcons name="lightbulb" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        fontWeight={"bold"}
        color={'$info-solid-text'}
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }
  