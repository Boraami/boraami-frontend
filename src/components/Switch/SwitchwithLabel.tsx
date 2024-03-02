import { Label, SizableText, Text ,XStack} from 'tamagui'
import { SwitchDefault } from './Switch'
import { SwitchDisable } from './SwitchDisable'
export function SwitchWithLabel(props: {
              size: string,
              checked?: boolean, 
              disable?: boolean,
              heading: string,
              helpertext: string}) {
var ts=0
var ls=''
//for dynamic sizes of label and helper text
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
    <XStack flexDirection='column' gap={4}/*size gap diff */>
       {props.disable?
       <>
        <Label
        size={ls}
        opacity={0.5}
        fontFamily={'$heading'}
        color="$disabled-label-text">{props.heading}</Label>
        
          <SwitchDisable checked={props.checked} size={props.size}/>
          <SizableText 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          opacity={0.5}
          fontSize={ts}
          color="$disabled-helper-text" >{props.helpertext}</SizableText></>
          :
          <>
          <Label
        size={ls}
        fontFamily={'$heading'}
        color="$disabled-label-text">{props.heading}</Label>
        <SwitchDefault size={props.size}/>
        <SizableText 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          fontSize={ts}
          color="$disabled-helper-text" >{props.helpertext}</SizableText></>
        }
        
      </XStack>
  )
}