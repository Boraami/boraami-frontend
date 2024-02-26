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
        gap={-2}
        height={btnH}
        width={btnW + 20}
        backgroundColor={'$success-solid-fill'}
        borderRadius={4}
        icon={<AntDesign name="check" size={10} color="white"/>}
        ><Label size={size}
        fontFamily={'$body'}
        fontWeight={"bold"}
        color={'$success-solid-text'}
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }
