import { Stack, styled } from '@tamagui/core'
import { createSwitch } from '@tamagui/switch'
import {  XStack} from 'tamagui'

const Frame = styled(Stack, {
  borderRadius: 20,
  padding:2,
  variants: {
    checked: {
      true: {
        backgroundColor: '$boraami.600',
      },
      false: {
        backgroundColor: '$boraami.300',
      },
    },
  } as const,
  defaultVariants: {
    checked: false,
  },
})
const Thumb = styled(Stack, {
  backgroundColor: '$boraami.50',
  borderRadius: 20,
  animation:'medium',
  variants: {
    checked: {
      true: {
      },
      false: {
      },
    },
  } as const,
})
export const SwitchBasic = createSwitch({
  Frame,
  // @ts-ignore (gives error if i remove this comment lol...)
  Thumb,
})
export function SwitchDefault(props: {size: string}) {
  console.log(props.size)
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
  return (
    <XStack>
        <SwitchBasic width={w} height={h}>
        <SwitchBasic.Thumb width={thumb} height={thumb}/>
        </SwitchBasic>
      </XStack>
  )
}