import { XStack,Label, Text, YStack } from 'tamagui'
import { RadioGroupItemWithLabel } from './Radiobutton'
import { RadioGroup } from 'tamagui'
export function RadiobuttonList(props: {
              disable?: boolean,
              disable2?:boolean,
              disable3?:boolean,
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
    <XStack flexDirection='column' gap={3}>
        {props.heading==''?
        <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack gap={3} marginLeft={5}>
       <RadioGroupItemWithLabel value='1' labeltext={props.labeltxt1}  size={props.size} disable={props.disable}/>
       <RadioGroupItemWithLabel value='2' labeltext={props.labeltxt2} size={props.size} disable={props.disable2} />
       <RadioGroupItemWithLabel value='3' labeltext={props.labeltxt3} size={props.size} disable={props.disable3} />
       </YStack>
       </RadioGroup>
       :
       <>
        <Label
        paddingTop={2}
        size={ls}
        fontFamily={'$heading'}
        color="$default-radio-text">{props.heading}</Label>
        
       <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack gap={3} marginLeft={5}>
       <RadioGroupItemWithLabel value='1' labeltext={props.labeltxt1}  size={props.size} disable={props.disable}/>
       <RadioGroupItemWithLabel value='2' labeltext={props.labeltxt2} size={props.size} disable={props.disable2} />
       <RadioGroupItemWithLabel value='3' labeltext={props.labeltxt3} size={props.size} disable={props.disable3} />
       </YStack>
       </RadioGroup>
       
       <Text 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          fontSize={ts}
          marginTop={2}
          color="$boraami.500" >{props.helpertext}</Text>
          
          </>
        }
      
    </XStack>
  )
}