import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { AntDesign } from '@expo/vector-icons';


export function PriBtn(props: { disable?: boolean,
                                size: string,
                                labeltxt: string}) {
  var btnH=0;
  var btnW=0;
  var size='';
  if (props.size == 'sm') {
    btnH=24
    btnW=76
    size='$sm'
  } else if (props.size == 'md') {
    btnH=32
    btnW=93
    size='$md'
  } else if (props.size == 'lg') {
    btnH=40
    btnW=107
    size='$lg'
  } else {
    console.log('incorrect size args')
  }
  return (
    <XStack backgroundColor={'$primary-default-btn'}
    borderRadius={'$r-subtle'}>
      {props.disable?
      <YStack flexDirection="row" gap={4} alignItems="center">
        <Button disabled={true}
        height={btnH}
        width={btnW}
        backgroundColor={props.disable?'$primary-default-btn' : '$primary-disabled-btn'}
        borderRadius={'$r-subtle'}
        icon={<AntDesign name="plus" size={12} color={"white"}/>}>{props.labeltxt}</Button>
      </YStack>
      :
      <YStack flexDirection="row" gap={4} alignItems="center">
        <Button height={btnH}
        width={btnW}
        icon={<AntDesign name="plus" size={18} color={"white"}/>}
        hoverStyle={{
          borderRadius:'$r-subtle',
          borderColor: "$primary-hover-btn-border",
          backgroundColor: "$primary-hover-btn-fill",
          shadowColor: '#0EA5E9',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset : { width: 0, height: 0}
        }}
        focusStyle={{
          borderRadius:'$r-subtle',
          backgroundColor: '$primary-focus-btn-fill',
          borderColor: '$primary-focus-btn-border',
          shadowColor: '#C2A0FF',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset : { width: 0, height: 0},
        }}
        ><Label
        size={size}
        fontFamily={'$body'}
        color={'$text-invert'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">{props.labeltxt}</Label></Button>
      </YStack>
    }
    </XStack>
  )
}
