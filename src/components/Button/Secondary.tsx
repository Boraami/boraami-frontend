import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

export function SecBtn(props: {
  disable?: boolean,
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
      <XStack borderColor={'$secondary-default-btn-border'}
      borderRadius={'$r-subtle'}>
        {props.disable?
        <YStack flexDirection="row" gap={4} alignItems="center">
          <Button disabled={true}
          height={btnH}
          width={btnW}
          borderColor={props.disable?'$secondary-default-btn-border' : '$secondary-disabled-btn-border'}
          borderRadius={'$r-subtle'}
          icon={<AntDesign name="plus" size={12} color={"#8F66D6"}/>}>{props.labeltxt}</Button>
        </YStack>
        :
        <YStack flexDirection="row" gap={4} alignItems="center">
          <Button height={btnH}
          width={btnW}
          icon={<AntDesign name="plus" size={18} color={"#8F66D6"}/>}
          hoverStyle={{
            borderRadius:'$r-subtle',
            borderColor: "$secondary-hover-btn-border",
            shadowColor: '#0EA5E9',
            shadowOpacity: 1,
            shadowRadius: 12,
            shadowOffset : { width: 0, height: 0}
          }}
          focusStyle={{
            borderRadius:'$r-subtle',
            borderColor: '$secondary-focus-btn-border',
            shadowColor: '#C2A0FF',
            shadowOpacity: 1,
            shadowRadius: 12,
            shadowOffset : { width: 0, height: 0},
          }}
          ><Label
          size={size}
          fontFamily={'$body'}
          color={'$text-secondary'}
          flexDirection="row"
          alignItems="center"
          justifyContent="center">{props.labeltxt}</Label></Button>
        </YStack>
      }
      </XStack>
    )
  }

/*const SDftBtn = styled(Button, {
    theme: 'light',
    name: "secondary",
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: "$r-subtle",
    color: '$text-secondary',
    icon: <AntDesign name="plus" size={24} color={"#8F66D6"}/>,
    borderColor={'$secondary-default-btn-border'},
    hoverStyle: {
      borderRadius: "$r-subtle",  
      borderColor: '$secondary-hover-btn-border',
      shadowColor: '#38BDF8',
      shadowOpacity: 1,
      shadowRadius: 12,
      shadowOffset : { width: 0, height: 0},
    },
    focusStyle: {
      borderColor: '$secondary-focus-btn-border',
      shadowColor: '#C2A0FF',
      shadowOpacity: 1,
      shadowRadius: 12,
      shadowOffset : { width: 0, height: 0},
    },
    height: '$sm',
    width: '$sm',
    top: '$sm',
    left: '$sm',
    gap: '$sm',
    paddingHorizontal: '$sm',
  })

export const DefaultText = styled(Text, {
  name: 'DefaultText',
  color: '$text-invert',
  fontFamily: '$OpenSansBold',
  lineHeight: 10,
  userSelect: 'none',
})


type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

export const SDeftBtn = ({onPress, text}: Props) => {
return <SDftBtn onPress={onPress}>{text}</SDftBtn>
};*/