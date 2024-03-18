import { XStack,Label, Text, YStack } from 'tamagui'
import { RadioGroupItemWithLabel } from './Radiobutton'
import { RadioGroup } from 'tamagui'
type RadioListSizeProps = {
  [key: string]: {
    ls:string,
    ts:number
  };
};

const radioSizes: RadioListSizeProps = {
sm: {
  ls:'$xs',
  ts:12
  },
md: {
  ls:'$sm',
  ts:14
  },
lg: {
  ls:'$md',
  ts:16
  },
};
type Props = {
  disable?: boolean,
  disable2?:boolean,
  disable3?:boolean,
  checked?: boolean, 
  size: string,
  labeltxt1: string,
  labeltxt2: string,
  labeltxt3: string,
  heading: string,
  helpertext: string,
}

export function RadiobuttonList({ disable, disable2, disable3, size, labeltxt1, labeltxt2, labeltxt3, heading, helpertext, checked, }: Props) {
  return (
    <XStack flexDirection='column' gap={3}>
        {heading==''?
        <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack gap={3} marginLeft={5}>
       <RadioGroupItemWithLabel value='1' labeltext={labeltxt1}  size={size} disable={disable}/>
       <RadioGroupItemWithLabel value='2' labeltext={labeltxt2} size={size} disable={disable2} />
       <RadioGroupItemWithLabel value='3' labeltext={labeltxt3} size={size} disable={disable3} />
       </YStack>
       </RadioGroup>
       :
       <>
        <Label
        paddingTop={2}
        size={radioSizes[size].ls}
        fontFamily={'$heading'}
        color="$default-radio-text">{heading}</Label>
        
       <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack gap={3} marginLeft={5}>
       <RadioGroupItemWithLabel value='1' labeltext={labeltxt1}  size={size} disable={disable}/>
       <RadioGroupItemWithLabel value='2' labeltext={labeltxt2} size={size} disable={disable2} />
       <RadioGroupItemWithLabel value='3' labeltext={labeltxt3} size={size} disable={disable3} />
       </YStack>
       </RadioGroup>
       
       <Text 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          fontSize={radioSizes[size].ts}
          marginTop={2}
          color="$boraami.500" >{helpertext}</Text>
          
          </>
        }
      
    </XStack>
  )
}