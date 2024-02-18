import { createCheckbox } from '@tamagui/checkbox'
import { Stack, styled } from '@tamagui/core'
import { FontAwesome6 } from '@expo/vector-icons';
import { Label,XStack,YStack } from 'tamagui'
import React from 'react';
//-Notes-
//PENDING: focus state, hover state
//DONE: checkbox check icon opacity, checkbox size={}, dynamic labels
const Frame = styled(Stack, {
  borderColor: "$boraami.700", //gives error if '$bg-brand-strong' is used cuz its alr using themestack
  borderRadius: 2,
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    checked: {
      indeterminate: {},
      true: {
        backgroundColor:  'rgba(95,61,156, 1)', 
        //applied like this because otherwise the opacity is applied to check icon too
      },
      false: { 
      },
    },
  } as const,
  defaultVariants: {
    checked: false,
  },
})
const Indicator = styled(Stack, {
})
export const Checkbox = createCheckbox({
  Frame,
  Indicator,
})
export function CheckBox(props: { disable?: boolean,
                                  checked?: boolean, 
                                  size: string, 
                                  labeltext: string}) {
//sizing=> -6=9, -5=11, -4=13, -3=14, -2=16, no-size=20
// -4->sm, -2->md, 0->lg(acc to design)
//in order to make it disabled, u have to give a checked state
console.log(props.size)
var cs=0;
var is=0;
var bw=0;
var s='';
if(props.size=='sm'){
  cs=-5
  is=9
  s='$md'
  bw=1.2
  console.log(cs,is, bw, s)

} else if(props.size=='md'){
  cs=-2
  is=12
  s='$xl'
  bw=2
  console.log(cs,is, bw,s)

} else if(props.size=='lg'){
  cs=0
  is=15 //label size diff
  s='$2xl' //size diff than documentation cuz the og measurements didnt work
  bw=2
  console.log(cs,is,bw,s)

}else{
  console.log('size arguments not correct')
}
  return (
    <XStack>
    {props.disable?
      <YStack flexDirection='row' gap={9} alignItems="center" >
        <Checkbox disabled={true}
          borderWidth={bw}
          borderColor={'rgba(95,61,156, 0.4)'} 
          backgroundColor={props.checked?'rgba(95,61,156, 0.4)':'transparent'}
          checked={props.checked}
          sizeAdjust={cs}
          >
          <Checkbox.Indicator  paddingBottom={1}>
            <FontAwesome6 name="check" size={is} color="white"/>
          </Checkbox.Indicator>
        </Checkbox>
        <Label 
        paddingLeft={1}
        size={s}
        opacity={0.4}
        fontFamily={'$body'}
        color="$mono.800"
        >{props.labeltext}</Label>
      </YStack>
        :
      <YStack flexDirection='row' gap={9} alignItems="center" >
        <Checkbox
         borderWidth={bw}          
         sizeAdjust={cs}
         hoverStyle={{
          borderWidth:0.75,
          shadowOpacity:0.9,
          shadowRadius:4,
          borderColor:'$serendipity.500',
        }}
         focusStyle={{
          borderWidth:2,
          borderColor:'$boraami.400',
        }}>
            <Checkbox.Indicator paddingBottom={1} >
              <FontAwesome6 name="check" size={is} color="#F7F3FF"/>
            </Checkbox.Indicator>
        </Checkbox>
        <Label 
        paddingLeft={1}
        size={s}
        fontFamily={'$body'}
        color="$mono.800"
        >{props.labeltext}</Label>
      </YStack>
  }
      </XStack>
  )
}
