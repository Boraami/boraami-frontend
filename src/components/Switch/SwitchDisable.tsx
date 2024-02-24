import { Stack, styled } from '@tamagui/core'
import { createSwitch } from '@tamagui/switch'
import { View} from 'react-native';
import { Label, Text, XStack} from 'tamagui'

const Frame = styled(Stack, {

  borderRadius: 20,
  padding:2,
  variants: {
    checked: {
      true: {
        backgroundColor: 'rgba(116, 79, 181, 0.4)',
      },
      false: {
        backgroundColor: 'rgba(194, 160, 255, 0.4)',
      },
    },
  } as const,
  defaultVariants: {
    checked: false,
  },
})

const Thumb = styled(Stack, {
  backgroundColor: 'white',
  borderRadius: 20,
  animation:'medium',
  variants: {
    checked: {
      true: {
        backgroundColor:'#fff',
        opacity:1
      },
      false: {
        backgroundColor: '#fff',
        opacity:0.9

      },
    },
  } as const,
})

export const SwitchDisabled= createSwitch({
  Frame,
  // @ts-ignore (gives error if removed)
  Thumb,
})

export function SwitchDisable(props: { checked?: boolean, size: string}) {
  var w=0;
  var h=0;
  var thumb=0;
  //dynamic sizing
  if(props.size=='sm'){
    w=32
    h=16
    thumb=12
  } else if(props.size=='md'){
    w=40
    h=20
    thumb=16
  } else if(props.size=='lg'){
    w=48
    h=24
    thumb=20
  }
  //added opacity to disabled switch thumb, wasnt initially in documentation but design looked a bit off so..
  return (
    <XStack>
      <SwitchDisabled width={w} height={h} disabled checked={props.checked} >
        <SwitchDisabled.Thumb opacity={0.5} width={thumb} height={thumb}/>
      </SwitchDisabled>
    </XStack>
  )
}