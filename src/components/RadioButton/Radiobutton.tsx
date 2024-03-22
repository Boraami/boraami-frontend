import { Label, RadioGroup, XStack, YStack } from 'tamagui'
import { FontAwesome } from '@expo/vector-icons';
import { Platform } from "react-native";
type RadioBtnProps = {
  value: string
  disable?: boolean,
  size: string, 
  labeltext: string,
  value2: string
  disable2?: boolean,
  size2: string, 
  labeltext2: string,
}
export function RadioButton({ value, disable, size, labeltext, value2, disable2, size2, labeltext2}: RadioBtnProps) {
    return (
      <RadioGroup aria-labelledby="Select one item" defaultValue="1" name="form">
        <YStack alignItems="center">
          <RadioGroupItemWithLabel value={value} labeltext={labeltext} size={size} disable={disable} />
          <RadioGroupItemWithLabel value={value2} labeltext={labeltext2} size={size2} disable={disable2} />
        </YStack>
      </RadioGroup>
    )
  }
type RadioSizeProps = {
    [key: string]: {
      rwh: number;
      ls: string;
      ris: number;
      dris: number;
    };
  };
  
const radioSizes: RadioSizeProps = {
  sm: {
      rwh:12,
      ls:'$sm',
      ris:6,
      dris:5.5
    },
  md: {
      rwh:16,
      ls:'$md',
      ris:8.5,
      dris:9.5
    },
  lg: {
      rwh:20,
      ls:'$lg',
      ris:10,
      dris:12
    },
  };
  
type Props = {
  value: string
  disable?: boolean,
  size: string, 
  labeltext: string
}

export function RadioGroupItemWithLabel({ value, disable, size, labeltext }: Props) {
  const id = `radiogroup-${value}`
    return (
      <XStack>
        {disable?
        <YStack alignItems="center" flexDirection='row' gap={8}>
        <RadioGroup.Item
        id={id}
         borderColor={"rgba(95,61,156,0.3)"}
         disabled={true}
         value={value} 
         borderWidth={2}
         width={radioSizes[size].rwh}
         height={radioSizes[size].rwh}
         >
          <RadioGroup.Indicator alignItems='center' justifyContent='center' >
           <FontAwesome name="circle" size={radioSizes[size].dris} color={"#5F3D9C"} 
           style={{marginTop:-5.6, marginRight:-3, marginBottom:-6, marginLeft:-3, opacity:0.5}}/*to position*/ />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <Label 
        opacity={0.4}
        htmlFor={id}
        size={radioSizes[size].ls}
        fontFamily={'$body'}
        color='$default-radio-text'>
          {labeltext}
        </Label>
      </YStack>
      :
      <YStack flexDirection='row'  alignItems="center" gap={8}>
        <RadioGroup.Item
        id={id}
         borderColor={"#5F3D9C"}         
         value={  value} 
         borderWidth={1.2}
         width={radioSizes[size].rwh}
         height={radioSizes[size].rwh}
         focusStyle={{
          borderWidth:2,
          borderColor:'$focus-radio-border',
        }}
        hoverStyle={{
          borderWidth:2,
          borderColor:'$serendipity.500',
        }}
         >
          <RadioGroup.Indicator  alignItems='center' justifyContent='center' >
           <FontAwesome name="circle" size={radioSizes[size].ris} color={"#5F3D9C"} 
           style={
            Platform.OS==="android"?
            {
              marginTop:-6.2, 
              marginRight:-5, 
              marginBottom:-6, 
              marginLeft:-4.9,}:
              {
                marginTop:-5, 
                marginRight:-5.5, 
                marginBottom:-5.8, 
                marginLeft:-4.9,}
            }/*to position*/ />
          </RadioGroup.Indicator>
        </RadioGroup.Item>
        <Label 
        htmlFor={id}
        size={radioSizes[size].ls}
        fontFamily={'$body'}
        color='$default-radio-text'>
          {  labeltext}
        </Label>
      </YStack>
      }
      
      </XStack>
    )
  }