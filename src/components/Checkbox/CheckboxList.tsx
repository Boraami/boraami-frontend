import { XStack,Label, Text, YStack, SizableText } from 'tamagui'
import { CheckBox } from './Checkbox';
type CBSizeProps = {
  [key: string]: {
    ls:string,
    ts:number
  };
};
const CBSizes: CBSizeProps = {
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

export function CheckBoxList({ disable, disable2, disable3, size, labeltxt1, labeltxt2, labeltxt3, heading, helpertext, checked, }: Props) {

  return (
    <XStack flexDirection='column' gap={10}>
      <Label
        paddingTop={2}
        size={CBSizes[size].ls}
        fontFamily={'$heading'}
        color="$disabled-label-text">{heading}</Label>
        <YStack gap={12} marginLeft={5}>
       <CheckBox value='1' labeltext={labeltxt1}  size={size} disable={disable} checked={checked}/>
       <CheckBox value='2' labeltext={labeltxt2} size={size} disable={disable2} checked={checked}/>
       <CheckBox value='3' labeltext={labeltxt3} size={size} disable={disable3} checked={checked}/>
       </YStack>
       <SizableText 
          lineHeight={21}
          fontWeight={"400"}
          fontFamily={'$body'}
          fontSize={CBSizes[size].ts}
          marginTop={2}
          color="$boraami.500" >{helpertext}</SizableText>
    </XStack>
  )
}