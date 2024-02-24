import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function OutInfoTag(props: { size: string,
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
    <XStack borderColor={'$info-outline-border'}
    borderRadius={4}>
      <YStack>
        <Button disabled={true}
        height={btnH}
        width={btnW}
        borderColor={'$info-outline-border'}
        borderRadius={4}
        icon={<MaterialCommunityIcons name="lightbulb" size={10} color="#0284C7" />}
        ><Label size={size}
        fontFamily={'$body'}
        color={'$info-outline-text'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }
