import React from "react";
import { Button, Label, XStack, YStack} from "tamagui";
import { AntDesign } from '@expo/vector-icons';

export function TerBtn(props: {disable?: boolean,
size: string
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
    <XStack
    borderRadius={'$r-subtle'}>
      {props.disable?
      <YStack flexDirection="row" gap={4} alignItems="center">
        <Button disabled={true}
        height={btnH}
        width={btnW}
        borderColor={props.disable?'$secondary-default-btn-border' : '$secondary-disabled-btn-border'}
        borderRadius={'$r-subtle'}
        icon={<AntDesign name="plus" size={12} color={"#8F66D6"}/>}><Label
        size={size}
        fontFamily={'$body'}
        color={'$tertiary-disabled-text'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">{props.labeltxt}</Label></Button>
      </YStack>
      :
      <YStack flexDirection="row" gap={4} alignItems="center">
        <Button height={btnH}
        width={btnW}
        icon={<AntDesign name="plus" size={18} color={"#8F66D6"}/>}
        hoverStyle={{
          borderRadius:'$r-subtle',
          borderColor: "$tertiary-hover-border",
          shadowColor: '#38BDF8',
          borderBottomWidth: 2,
          shadowOpacity: 1,
          shadowRadius: 19,
          shadowOffset : { width: 0, height: 0}
        }}
        focusStyle={{
          borderRadius:'$r-subtle',
          borderColor: '#7957B5',
          shadowColor: '#C2A0FF',
          shadowOpacity: 1,
          shadowRadius: 12,
          shadowOffset : { width: 0, height: 0},
        }}
        ><Label
        size={size}
        fontFamily={'$body'}
        color={'$tertiary-default-text'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">{props.labeltxt}</Label></Button>
      </YStack>
    }
    </XStack>
  )
}

/*const TDftBtn = styled(Button, {
    theme: 'light',
    name: "tertiary",
    flexDirection: 'row',
    alignSelf: 'center',
    color: '$tertiary-default-text',
    icon: <AntDesign name="plus" size={24} color={"#8F66D6"}/>,
    chromeless: true,
    hoverStyle: {
      borderBottomWidth: 2,
      borderBottomColor: '$tertiary-hover-border',
      shadowColor: '#38BDF8',
      shadowOpacity: 1,
      shadowRadius: 19,
      shadowOffset : { width: 0, height: 0},
    },
    focusStyle: {
      borderColor: '#7957B5',
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

export const TDeftBtn = ({onPress, text}: Props) => {
  return <TDftBtn onPress={onPress}>{text}</TDftBtn>
  };*/