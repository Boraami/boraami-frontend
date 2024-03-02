import { XStack,Label, Text, YStack, SizableText } from 'tamagui'
import { CheckBox } from './Checkbox';

export function CheckBoxList(props: {
              disable?: boolean,
              disable2?: boolean,
              disable3?: boolean,
              checked?: boolean, 
              size: string,
              labeltxt1: string,
              labeltxt2: string,
              labeltxt3: string,
              heading: string,
              helpertext: string,}) {
var ts=0
var ls=''
//for dynamic size of label and helper text
if(props.size=='sm'){
  ls='$xs'
  ts=12
}else if (props.size=='md'){
  ls='$sm'
  ts=14
}else if (props.size=='lg'){
  ls='$md'
  ts=16
}
  return (
    <XStack flexDirection='column' gap={10}>
      <Label
        paddingTop={2}
        size={ls}
        fontFamily={'$heading'}
        color="$disabled-label-text">{props.heading}</Label>
        <YStack gap={12} marginLeft={5}>
       <CheckBox labeltext={props.labeltxt1}  size={props.size} disable={props.disable} checked={props.checked}/>
       <CheckBox labeltext={props.labeltxt2} size={props.size} disable={props.disable2} checked={props.checked}/>
       <CheckBox labeltext={props.labeltxt3} size={props.size} disable={props.disable3} checked={props.checked}/>
       </YStack>
       <SizableText 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          fontSize={ts}
          marginTop={2}
          color="$boraami.500" >{props.helpertext}</SizableText>
    </XStack>
  )
}