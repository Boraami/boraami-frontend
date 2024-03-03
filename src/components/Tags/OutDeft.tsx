import React from "react";
import { Button, Label, XStack, YStack, Text} from "tamagui";
import { Entypo } from '@expo/vector-icons';

export function OutDeftTag(props: { size: string,
                                labeltxt: string}) {
  var btnH=0; //manually put button height (btnH), button width (btnW) because the size variables were making the tags square shaped
  var btnW=0;
  var size='';
  if (props.size == 'sm') {
    btnH=20
    btnW=76
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
        gap={-2} //had to change gap size because gap:4 was messing with the tag's appearance
        height={btnH}
        width={btnW + 30}
        borderColor={'$default-outline-border'}
        borderRadius={4}
        icon={<Entypo name="heart" size={10} color="#744FB5"/>}
        ><Label size={size}
        fontFamily={'$body'}
        fontWeight={"bold"}
        color={'$default-outline-text'}
        >{props.labeltxt}</Label></Button>
      </YStack>
    </XStack>
  )
  }